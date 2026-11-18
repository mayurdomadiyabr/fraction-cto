---
title: 'Do you need WebSockets, or will polling do?'
slug: do-you-need-websockets-yet
date: '2026-11-18T04:35:41.314Z'
category: Decisions
excerpt: >-
  Most early products do not need WebSockets. When polling, server-sent events
  or WebSockets fit, and what each one really costs a small team.
description: >-
  Polling, server-sent events or WebSockets? A practical way for early-stage
  teams to choose, with the hidden costs of real-time features.
author: The founder of Fraction
readTime: 6
draft: false
---

Most early products do not need WebSockets. If a screen only has to show new data within a few seconds, polling every 5 to 15 seconds is cheaper to build, easier to debug and good enough for years. If the server only needs to push updates one way, such as progress bars, notifications or streamed AI responses, server-sent events are usually the next step. Reach for WebSockets when both sides really do send small messages constantly: chat, live cursors, multiplayer editing.

I get asked this question in a particular way. A founder sees a competitor's dashboard update "live", or an engineer says the product "should be real-time", and suddenly there is a two-week ticket to add a WebSocket layer. Sometimes that is right. More often the product needed fresher data on one screen, not a new piece of infrastructure.

## What "real-time" usually means to your customer

Before choosing a technology, ask what the customer would notice. In my experience the answers fall into three groups.

- **"I want to see it without refreshing."** An order status, a report that finished, a new comment. A delay of 5 to 10 seconds is invisible to most people here.
- **"I want to watch it happen."** A file processing, an import running, an AI answer being written word by word. The data flows one way, server to browser, and it flows for a limited time.
- **"I am working with other people at the same moment."** Chat, shared documents, a live auction, a game. Both sides send messages, often several per second, and a one-second lag feels broken.

Only the third group truly needs a persistent two-way connection. The first two get mislabelled as real-time and then built with the most complex tool available.

## The three options in plain terms

### Polling

The browser asks the server "anything new?" on a timer. It is plain HTTP, so it works through every proxy, load balancer, CDN and corporate firewall your customers have. Your existing authentication, logging and error handling all apply unchanged.

The cost is wasted requests. If 300 users keep a page open and poll every 10 seconds, that is 30 requests a second, most of them returning "nothing new". For a small product on a normal server that is trivial, especially if the endpoint is a cheap indexed query. It becomes a problem at much higher numbers, or when the polled query is expensive. If your polling endpoint is slow, fix the query first; I wrote about that trade-off in [add a cache or fix the query](/post-your-app-is-slow-add-a-cache-or-fix-the-query).

### Server-sent events

The browser opens one long-lived HTTP connection and the server writes events down it as they happen. Browsers support this natively through the `EventSource` API, which reconnects automatically if the connection drops ([MDN has a clear guide](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events)). It is one-way only: the browser still sends normal requests when it wants to do something.

This fits progress updates, notifications and token-by-token AI responses very well. Many AI products already stream answers this way. The catch is that long-lived connections behave differently from normal requests. Some hosting platforms and proxies cut connections after a timeout, buffer the response, or bill by connection time. Check this before you commit, especially on [serverless platforms](/post-serverless-or-a-server).

### WebSockets

A WebSocket is a persistent two-way connection. It is the right tool for chat, presence, collaborative editing and anything where the browser sends many small messages too.

What founders do not see in the estimate is everything around it:

- Each server now holds open connections, so deploys must drain or drop them, and clients must reconnect and catch up on anything they missed.
- If you run more than one server, a message created on server A has to reach users connected to server B. That usually means adding a pub/sub layer such as Redis.
- Authentication happens once at connect time, so you need a plan for expired sessions and revoked access on a connection that stays open for hours.
- Load testing, monitoring and debugging all get harder, because failures are now about connection state, not single requests.

None of this is exotic, but in my experience it turns a "two-day feature" into two to four weeks of work for a small team, plus ongoing care. That is my rule of thumb, not a law.

## A simple decision path

This is the order I walk teams through.

1. **Can the screen tolerate a 5 to 15 second delay?** Use polling. Add a check so polling pauses when the browser tab is hidden. Done.
2. **Does data only flow from server to browser, for a while?** Use server-sent events, after confirming your hosting handles long-lived connections.
3. **Do users interact with each other live, sending frequent messages both ways?** Use WebSockets, and seriously consider a managed service.
4. **Is "real-time" a sales checkbox rather than a user need?** Ship polling and see if anyone notices. Usually nobody does.

The mistake I see most is skipping straight to step 3 because it sounds like the serious engineering answer.

## Build it yourself or use a managed service

If you do need WebSockets, there are hosted services (Pusher, Ably and the realtime features of platforms like Supabase and Firebase are common examples) that handle connections, fan-out across servers and reconnection for you. You call their API from your backend; they deliver to browsers.

I lean towards a managed service when:

- The realtime feature is supporting, not core. Live notifications in a B2B tool are a good example.
- You have one or two engineers and no one who has run connection-heavy systems before.
- You want to find out whether customers use the feature before investing in it.

I lean towards building it when realtime is the product itself, such as a collaborative editor, when message volume makes per-message pricing expensive, or when data residency rules limit where messages can travel. Pricing for these services changes often, so model it against your own expected connection and message counts rather than trusting a blog post, including this one. Keep the provider behind a thin interface in your code so switching later is a contained job; I explain how much abstraction is worth it in [the vendor abstraction layer post](/post-vendor-abstraction-layer).

## A real pattern from the room

A pattern I have seen several times: a B2B SaaS team spends most of a quarter building a WebSocket service so that a status dashboard updates live. The dashboard is opened a few times a day by a handful of ops managers. Then the WebSocket service becomes the most fragile part of the system, the thing that breaks on every deploy. Replacing it with 10-second polling removes a service, fixes the deploy problem, and none of the customers notice the difference.

The opposite mistake is rarer but real: a team building a shared workspace product polls every second, the database falls over at a few hundred concurrent users, and they have to rebuild under pressure. The lesson is the same in both cases: match the tool to how the feature is actually used.

## FAQ

### Is polling bad practice?

No. It is a deliberate trade of some wasted requests for a much simpler system. Plenty of mature products still poll for things that change occasionally. It becomes bad practice when the polled endpoint is expensive or the interval is very short across many users.

### Can I start with polling and move to WebSockets later?

Yes, and that is usually the smart order. Keep the "fetch latest state" endpoint even after you add push, because clients need it to catch up after reconnecting anyway.

### Do AI chat features need WebSockets?

Usually not. Streaming an AI answer is one-way, server to browser, for a few seconds. Server-sent events or a streamed HTTP response handle it well. You only need WebSockets if users interrupt or collaborate in ways that require constant two-way messaging.

### Will investors care which one we use?

Not directly. In technical diligence they care whether the choice fits the product and whether the team can explain it. A clear "we poll because updates are infrequent" is a better answer than an over-built system nobody can maintain. If you want a second opinion on choices like this before a raise, a [technical teardown](/teardown) is built for exactly that, or you can [book a call](/book-a-call) and we will talk it through.
