---
title: You can't tell if you're interviewing the engineer or their AI
slug: candidate-using-ai-in-interview
date: '2026-07-19T13:55:10.766Z'
category: Hiring
excerpt: >-
  Any candidate can now have an AI feeding them answers mid-interview, and you
  will not spot it. Stop trying to catch the cheat. Run an interview AI cannot
  rescue.
description: >-
  Candidates can have AI feed them answers mid-interview. Detection loses.
  Interview your first engineer so AI in the room cannot rescue a weak one.
author: The founder of Fraction
readTime: 7
draft: false
---

If you are a non-technical founder hiring your first senior engineer this year, start from an uncomfortable assumption: any candidate in a remote interview can have an AI feeding them answers in real time, and you will not catch it by watching their face. The honest fix is not better cheat detection. That is an arms race you will lose. The fix is to run an interview an AI in the room cannot rescue, one built around decisions the person actually made, live reasoning about your specific situation, and watching how they think rather than whether they land the clean answer.

I have sat in on a lot of first-engineer interviews for founders who cannot read code themselves. The question they used to ask me afterward was "did he get it right?" The question that matters now is "was that even him?"

## Why catching the cheat is the wrong goal

The tooling has gotten good. A candidate can run something on a second screen or a phone that listens to your questions, drafts an answer, and shows it back to them while they look straight at the camera. Some of it is quiet enough that a sharp person reading from it sounds like a sharp person thinking. If your plan is to spot the tell, the glance, the pause, the slightly-too-polished phrasing, you are playing a detection game against people whose whole product is defeating detection. You will flag honest candidates who are just nervous, and you will wave through coached ones who are smooth. Both errors are expensive on a three-person team.

There is a deeper reason detection is the wrong frame. The thing you are actually trying to buy from a senior engineer is judgment: the ability to look at a messy, underspecified situation and make a good call quickly, then explain the tradeoff to a room that is not technical. An AI whispering a textbook answer cannot supply that, because your situation is not in the textbook. So instead of trying to prove the candidate is not using AI, design the conversation so that AI assistance does not help them. If a question can be answered well by a model reading a transcript, that question was never testing the thing you need.

## What the assist can fake, and what it cannot

An AI copilot is very good at the generic and the well-documented. Ask what the difference is between a queue and a stream, or how you would design a link shortener, and a listening model hands over a clean, correct, forgettable answer. Those questions are worthless now. They were close to worthless before.

It is much weaker at three things. First, specifics the candidate actually lived through: what broke at their last company, what they argued for and lost, what they would do differently. A model can invent a plausible story, but it cannot hold that story up under a second and third follow-up about a real one. Second, your context: a decision that depends on your customers, your stage, and your constraints, which the candidate has to reason about on the spot from facts you just handed them. Third, thinking under a moving target, what happens when you change a number halfway through and watch whether they update or keep reciting.

Structure the whole interview around those three, and the copilot on the other screen becomes dead weight.

## How to run an interview AI cannot rescue

You do not need to be technical to do any of this. You need to be willing to keep asking why, and to notice whether the answers are getting deeper or just getting longer.

### Ask about decisions they actually made

Pick a real decision from their background and go three layers down. You moved off the payments provider you started with, who pushed back, and what did they say? What did that migration cost you that you did not expect? A person who lived it gets more specific and more human as you dig. A person reading generated text gets vaguer, or produces suspiciously tidy detail that does not connect to the last thing they said. You are not grading the technical answer. You are watching whether a real memory is underneath it.

### Put your actual problem on the table

Describe something you are genuinely deciding right now, with your real constraints, and ask them to think it through with you. One big customer wants us to self-host, we are four people, what would you want to know before we say yes? There is no canned answer for this, because it depends on facts only you have. A strong engineer starts asking you questions back. That reflex, narrowing an open problem before answering it, is most of what senior judgment looks like in practice, and it is exactly what a scripted assist cannot produce.

### Work a problem together, out loud

Skip the take-home. It stopped measuring anything the day a model could complete it in one shot, and I have written before about [why the take-home test broke and what to run instead](/post-engineer-work-sample-test). Replace it with fifteen minutes of thinking out loud together. Give them a small, ambiguous problem and work it side by side, you asking naive questions, them narrating their reasoning. Someone reading answers off a screen cannot narrate a live thought process while you interrupt, backtrack, and add a wrinkle. The narration is the signal, not the conclusion.

### Change the question halfway through

The cheapest tell that survives any tool is to move the goalposts mid-answer. Okay, now assume that customer is in healthcare and there is patient data involved, what changes? A person reasoning updates in real time and often gets more engaged. A person relaying a generated answer has to stop and re-query, and you can feel the seam. You are not trying to trap them. You are trying to see them think, which is the whole reason you are talking to a human instead of reading their resume.

## Using AI on the job is not the thing you are screening for

Here is the part founders get twisted. You are not hiring someone who will refuse to touch AI tools. Your future engineer will use them every day, and you want that; it is a large part of why one strong senior can now do what took three people a few years ago. Banning AI outright, or treating any tool use as disqualifying, screens for the wrong trait and pushes your best candidates away.

The line is simple. Using AI to do the work is fine and expected. Using AI to fake ability you do not have, in order to land a job you cannot actually do, is fraud, and on a small team it is a fraud you keep paying for every day after. The distinction is not did they use a tool. It is can this person make the calls themselves, or were they renting the calls for an hour. An interview that watches judgment, context, and live reasoning separates those two cleanly, whether or not a copilot is running in the background.

## What this means for your first hire

A false positive on a large engineering team is a bad quarter. On a four-person startup, your first senior engineer sets the architecture, the standards, and the pace for everyone who comes after. Hire the AI instead of the person and you find out three months in, when the tickets that need real judgment stall and nobody can say why. This is the same reason it is worth being deliberate about [who does the vetting when you have no engineers of your own](/post-who-vets-your-engineer), and about [how a non-technical founder reads senior technical ability](/post-interview-engineer-non-technical) in the first place.

If you are about to run these interviews and you cannot tell whether you are hearing the candidate or their tooling, that is a good moment to have someone technical sitting in with you. It is one of the things founders bring me in for. If you want a second set of ears on your first senior hire, [book a call](/book-a-call).

## FAQ

### Should I ban AI tools during the interview?
You can ask, but you cannot enforce it in a remote setting, so do not build your process on the honor system. Assume a tool might be running and design questions it cannot help with. That is far more robust than a rule you have no way to check.

### Are in-person interviews the answer?
They help for a final round, and for a genuinely senior hire a few hours in the same room is worth the flight. But do not make it your only filter. A well-run remote conversation about real decisions and your real problems catches most of what matters, and it does not exclude the strong remote candidates you probably need at this stage.

### What if I am not technical enough to judge the answers?
You can judge the shape of thinking even when you cannot judge the code. Does the person ask clarifying questions before answering? Do they get more specific under follow-up, or less? Do they change their mind when you change the facts? Those signals are readable by anyone. For the parts that genuinely need a technical read, bring in someone who has one rather than guessing.
