import React from "react";

export default function Guide() {
    return (
        <div className="content doc-content">
            <h1>Color Palettes for Web Development</h1>
            <p>
                Here's a scenario, you're starting a new project and you want to give it its own visual identity. That means you need to decide on a color palette. You don't have a ton of time to do mock ups or other design work. You sure as heck can't afford to pay someone to design it for you. So you do a search for “color palette generator”. A list of tools pop up and you eventually find one that seems pretty cool. After a bit fiddling you end up with a lovely row of color swatches that conveys the emotional essence of your project.
            </p>
            <div className="doc-image">
                <img src={STATIC_PREFIX + 'PaletteBlender/images/docs/typical_palette.png'} alt="Several swatches of moderately saturated colors" />
            </div>
            <p>Beautiful. But now what?</p>
            <p>
                Someone should have reminded you that you're designing a website, not the set of a Wes Anderson film. For building an actual website, you're going to need something a little different.
            </p>
            <h2>A Practical Approach</h2>
            <p>
                While there are no doubt plenty of ways to design a color palette, Palette Blender was built with a particular work flow in mind. The approach I'm referring to is based around the principle of choosing a single primary color (primary as in main, not necessarily red, green, or blue) that defines the visual identity of your site, a set of accent colors, and a set of grays. Each color should have a range of shades to fit the needs of background colors, borders, text, etc. I've been applying this system to my projects for some time and find it to be an effective way to design good looking sites with clear interfaces and organized stylesheets.
            </p>
            <p>
                Rather than go into detail on the nuts and bolts behind this design philosophy here, I suggest checking out <a href="https://www.refactoringui.com/previews/building-your-color-palette">this article at Refactoring UI</a>. The concepts there are explained very well and concisely. For the rest of this article, I'll be focusing more on my own experiences of applying this approach in projects and some of the lessons I've learned.
            </p>
            <p>
                It should be noted that I'm not a professional designer. Much of my day job is spent building small scale web apps that might take anywhere from a few days to a few months to build. Aesthetics is usually a secondary consideration for most of these projects. Still, I like it when things look nice and so do the end users.
            </p>
            <h2>
                Define Your Palette at the Start of the Project 
            </h2>
            <p>
                You should choose your color set early on in a project. Not for any artistic reasons per se, but for the practical reason that once you start writing CSS it's convenient if your colors are already defined. With that in mind, using CSS variables for colors with a consistent naming convention across projects is really helpful. It also makes swapping color palettes in and out of projects painless. Before Palette Blender, I'd have a basic starter palette that would get pasted in at the beginning of a project that would be tweaked as needed.
            </p>
            <h2>How Many Shades Do I Need?</h2>
            <p>
                It depends, but generally, I've found that 7 shades of each color and 9 shades of gray is the sweet spot. For one, this allows for the fairly intuitive naming convention of variables in stylesheets of light, lighter, lightest, dark, darker, darkest. That said, 7 shades is usually the minimum and it's not uncommon to add a couple more. Feel free to adjust the naming convention to something sensible to you.
            </p>
            <h2>Color Should Support Functionality</h2>
            <p>
                The colors you choose for your site should, at the very least, not get in the way of its usability. There are far better resources available on the subject of accessibility and color contrast guidelines, so I won't get into that here though check the bottom of the page for resources on that. What I will say is that you should ensure that your use of color supports the visual hierarchy of your application and helps to convey special meaning where appropriate (such as red for “danger”). 
            </p>
            <p>
                To achieve this, it's really helpful to be able to see how your color choices actually look with the real components of a site. That's what Palette Blender is here for, but regardless of the tools you use, don't consider your color design complete until you've had a chance to vet its effectiveness in the context of an actual website.
            </p>
            <h2>Interesting Alternatives</h2>
            <p>
                While I think the approach mentioned here is the most sensible for most applications where aesthetics is secondary to functionality, there are some sites that do seem to use a much more extensive color set effectively that I thought would be worth mentioning. One idea that can look quite nice is to chunk up pages into horizontal sections that each get their own color scheme with each section related in overall tone to the larger palette. A good example of this can be seen at <a href="https://remarkable.com/">remarkable.com</a>.
            </p>
            <p>
                The <a href="https://mailchimp.com/developer/">Mailchimp developer docs</a> also stand out to me as a site that makes use of a wider range of accent colors beyond the typical info, success, warning, and danger paradigm.
            </p>
            <p>
                While Palette Blender doesn't (yet) have the ability to add additional sub palettes, this may be something to add in the future to facilitate these kinds of design.
            </p>
            <h2>Additional Resources</h2>
            <ul>
                <li>
                    <a href="https://webaim.org/articles/">Web accessibility guides</a> at <strong>WebAIM</strong>
                </li>
                <li>
                    <a href="https://webaim.org/resources/contrastchecker/">Color contrast checker</a> at <strong>WebAIM</strong>
                </li>
                <li>
                    <a href="https://www.refactoringui.com/previews/building-your-color-palette">Building Your Color Palette</a> by <strong>Refactoring UI</strong>
                </li>
            </ul>
        </div>
    );
}