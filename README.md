# Consultation static

This is the core templating for Camargue static consultation websites. This template posts feedback to either [Consult Online](https://github.com/jamesforddesign/consult-online) or [Catcher](https://catcherv2.jfd.co.uk) and ensure a consistency of functionality and reliability with all consultations.

## Prerequisites
You must have [Node](https://nodejs.org/en/) installed. The default Node version for this project is v22.

> [!TIP]
> Install [Node Version Manager](https://github.com/nvm-sh/nvm) so you can switch between different versions of Node like a pro.

## Running a consultation locally
1.  Clone the repository: `git@github.com:jamesforddesign/consultation-static.git`
2.  Make a copy of the `.env.example` file, rename to `.env` and complete the variables accordingly
3.  Install Node dependencies by running `npm install` in the project root.
4.  Run `npm start` in the root of the project to start a local server and watch for changes.

## Dummies
Simply copy and paste these into your page data to quickly construct your pages and populate with your supplied content.

### Page
A dummy [page structure](/dummies/page.js) can be used to copy and paste into your `src/data/pages` directory. This will ensure that the required data is supplied to the template.

### Content blocks
The following content block types and fields are available in the consultation static templating. As further components are required for future consultations this list will be updated in each maintenance window accordingly.

- **[Accordion](/dummies/blocks/accordion.js)** - A grouped accordion component that accepts as many sections and documents as required.
- **[Articles](/dummies/blocks/articles.js)** - A filterable & paginated grid of articles generated from supplied data.
- **[Banner](/dummies/blocks/banner.js)** - A banner component containing a headline and multiple possible links.
- **[Breadcrumbs](/dummies/blocks/breadcrumbs.js)** - A site breadcrumb component where links are generated using the [Eleventy Navigation](https://www.11ty.dev/docs/plugins/navigation/) plugin in the templates.
- **[Carousel](/dummies/blocks/carousel.js)** - A carousel component that accepts text and image items.
- **[Full width image](/dummies/blocks/full-width-image.js)** - A zoomable full width image.
- **[Hero](/dummies/blocks/hero.js)** - A hero component with variants and configurable background image and overlay.
- **[Inline feedback](/dummies/blocks/inline-feedback.js)** - A single section of the feedback form shown in-situ with content.
- **[Map](/dummies/blocks/map.js)** - A map component that accepts additional visuals and timelines.
- **[Table](/dummies/blocks/table.js)** - A table component that accepts multiple columns and rows.
- **[Text](/dummies/blocks/text.js)** - A text component that accepts multiple columns, images and multiple links.
- **[Timeline](/dummies/blocks/timeline.js)** A timeline component with points showing the project timeline
- **[Video](/dummies/blocks/video.js)** - A simple video component that also accepts multiple optional links.

#### Road map
- **Carousel** - A swipable hero component that also accepts multiple optional links per slide.
- **FAQ accordion** - An FAQ specific accordion with question and answer. Also accepts multiple optional links.
- **Timeline map** - A tabbed map component showing key geographical elements during different time frames of a consultation.
- **Timeline** - A horizontally scrolling component to outline key dates within a consultation.
- **Visualisation map** - A map component with clickable pins showing further multimedia within a modal.

## Testing
Javascript that handles feedback data has an accompanying test suite written for it. After making structural changes to your API, it is recommended to run the test suite. This will help you find any issues with data before conducting your own usability testing.

```bash
npm test
```

There is also a test and build script included in this repo. This runs the test suite before beginning the build process. In the event that a test fails, the build process is aborted. This should help avoid deploying broken content. Therefore it is important to check the deployment logs when deployment as any errors will be highlighted.

This is to be set as default when setting up Netlify instead of the usual `npm build` script, use:

```bash
npm run test:build
```

This can however be swapped back if absolutely necessary to deploy code without running the test suite first.