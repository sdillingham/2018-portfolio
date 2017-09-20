---
title: Thoughts on the PMP API, culture, and why KPCC writes its own software
teaser: If public media is to thrive for another 40 years, we must get better at attracting and retaining great developers, and that begins by investing in fully modern software tools and workflow.
date: 2013-11-09 12:00 UTC
tags: pubmedia, strategy, development
---

I was geeked to hear that the [Public Media Platform](http://publicmediaplatform.org/), a collaboration across public media to create a common content distribution network, is [building its API using Node.js](https://github.com/publicmediaplatform/pmpdocs/wiki/Software-Stack).

NPR's dev team will be leading the charge and basing their work largely off of [NPR's existing (very successful) API](http://www.npr.org/api/index). NPR's API is written in PHP and has existed since 2008. They have a lot invested in their current architecture, so the switch to Node is a significant and meaningful change.

The decision to use Node.js for this project may generate debate in the dev community in terms of whether or not it was the right technical decision. But the “this-stack-vs.-that-stack” argument obscures a reality often ignored in public media: the technologies you choose to embrace are not merely about technology, they're about culture.  

This got me thinking about why we write our own software at KPCC. We use Rails to build most of our apps, including our [CMS](https://github.com/SCPR/outpost), and we also are fans of Node.js for [particular](https://github.com/StreamMachine/StreamMachine/) [applications](https://github.com/SCPR/Newsroom). We don't use Wordpress or Drupal on any of our sites. Heck, we even abandoned Shoutcast in favor of software we wrote.

So that begs the question: why write your own CMS or streaming server when established, free options exist?

### Great tools = better developers

**Fact:** Great developers love solving interesting problems, and they loathe using mediocre tools. The technology and platforms you choose to invest in have the single greatest impact on the kinds of developers you can attract.

Public media, for example, has invested deeply in Drupal and Wordpress as publishing platforms of choice. These are respectable systems, each with their own advantages. But their Achilles' heel is that talented software developers don't want to touch them with a ten foot pole. You won't ever see this disadvantage when looking at a CMS feature comparison chart. And yet it's one of the most important things you need to consider when deciding which platforms to invest in.

If public media is to thrive for another 40 years, I believe we must get better at attracting and retaining great developers, and that begins by investing in fully modern software tools and workflow.

The engineer who works at Tesla inventing a better lithium-ion battery? She's not interesting in giving your car an oil change, or figuring out why your carburetor is noisy. Similarly, the kind of developers who can solve higher-order problems (where innovation happens) are not the same people who want to debug your Wordpress plugin problems, or figure out why your Drupal site is running so slow. To a skilled developer, these are *not* interesting problems.

### Where to begin

I think public media (and the news business in general) can look to the news app teams some have built as a model for how to create cultures that attract brilliant technical people. The teams at WNYC, NPR, and ProPublica consistently do innovative work, and it's no accident that they open source their work and embrace modern open source software. They don't favor off-the-shelf solutions— they're rolling their own tools to devise elegant solutions to specific problems.

They're inventing their own future, and having a blast doing it. I want to see public media replicate that model for our core product teams— the ones who make the websites and apps that our audiences interact with every day, the ones who build the publishing tools that shape how newsrooms create content.

When hiring designers and developers, you're competing with every startup and agency out there. Since it's unlikely that we can match their compensation and perks, we've got to at least make our engineering cultures competitive.

Here's a few ideas you could implement today to make your product development culture more attractive:

* **Start hosting all your code on GitHub.** Adopt [GitHub's workflow](http://zachholman.com/talk/how-github-uses-github-to-build-github/) of branching and pull requests. Let your developers make as many projects public as possible. In addition to making your current devs happy, this acts as a calling card for prospective developers who want to know what kind of projects and code they'll inhereit if they come to work for you.
* **Embrace test-driven development.** This one can be challenging if your team isn't already convinced that writing tests is important. But it pays huge dividends down the road, and is one of the practices good developers look for when deciding where to work.  
* **Take an upcoming project and choose to build it using new tools.** Find a long-standing problem or pain point, and instead of looking for a 3rd party solution, try writing your own. Abandon that Google Spreadsheet you use for editorial planning and write an app to replace it. Deploy your next web server or app using [Chef](http://www.opscode.com/chef/) or [Docker](https://www.docker.io/). Hell, decide to build an Android app [because racecar](http://www.complex.com/rides/2013/03/the-25-funniest-because-race-car-memes/). The point is to create an environment where product teams challenge themselves.
* **Invest in design.** Startup culture has taught designers and developers to value each other as essential to doing great work. Good designers and developers will attract one another, and raise the bar for the work your team is capable of shipping.
* **MVP your next product launch.** Momentum matters to product teams. Don't work a project for months before it sees the light of day. Allow your team to work iteratively, ship early and gather feedback from real users.

Returning to NPR and Node.js, my sense is that the decision to build the PMP API using Node will have several benefits:

* It will win many hearts and minds in the broader developer community, and get more forward-thinking programmers excited about contributing to the project.
* Embracing new, more modern software development frameworks will be an effective tool in recruiting new developers to work for NPR/PMP.
* I'd bet that the developers currently involved in the PMP API project are more energized to dive into what is expected to be a massive, multi-year undertaking.
