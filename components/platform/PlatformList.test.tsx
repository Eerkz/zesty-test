import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import PlatformList from "./PlatformList";
import { PlatformSection } from "../../types/Zesty";

const mockData: PlatformSection[] = [
  {
    lang_id: "1",
    title: "Web Application Firewall",
    sub_parent: "7-d8eef8ab8e-6jc40w",
    sort_order: "1",
    layout: "product_section_layout_2",
    media_content:
      '<p><img src="https://kfg6bckb.media.zestyio.com/zestyio-waf.png" data-id="3-a9bccf4-cuxd2" title="zestyio-waf.png" alt="zestyio-waf.png" /></p>',
    rich_media: null,
    text_content:
      "<p>All webpages and endpoints are protected by a continuously updated web application firewall (WAF). This is automatically configured upon launch and does not require any additional management.&nbsp;</p>\n" +
      '<div class="tags has-addons"><span class="tag is-success">✓</span> <span class="tag is-dark">DDOS Protection</span></div>\n' +
      '<div class="tags has-addons"><span class="tag is-success">✓</span> <span class="tag is-dark">Continuously Optimized</span></div>\n' +
      '<div class="tags has-addons"><span class="tag is-success">✓</span> <span class="tag is-dark">Managed Automatically</span></div>',
    meta_keywords: null,
    meta_description: "",
    meta_title: "Web Application Firewall",
    uri: null,
  },
  {
    lang_id: "1",
    title: "Out of the Box Media Management",
    sub_parent: "7-c0dcdbd1bf-d69tgb",
    sort_order: "1",
    layout: "product_section_layout_2",
    media_content:
      '<p><img src="https://kfg6bckb.media.zestyio.com/media-management-in-zestyio.png" data-id="3-a9bd48e-zgutl" title="media-management-in-zestyio.png" alt="media-management-in-zestyio.png" /></p>',
    rich_media: null,
    text_content:
      '<p data-pm-slice="0 0 []">A DAM (digital asset manager) is a Zesty.io service for managing files that are served publicly. Designed as an abstract file system, the DAM allows file organization that mimics an operating system directory structure.</p>\n' +
      "<p></p>\n" +
      '<p><br /><a href="https://zesty.org/services/media-storage-micro-dam"><button class="button is-link is-outlined">Learn More</button> </a></p>',
    meta_keywords: null,
    meta_description: "",
    meta_title: "Out of the Box Media Management",
    uri: null,
  },
  {
    lang_id: "1",
    title: "Zesty.io Web Content Management Benefits",
    sub_parent: "7-8adbf7cb94-w10vkt",
    sort_order: "1",
    layout: "product_section_layout_3",
    media_content:
      "<div>\n" +
      '<table border="0" style="border: none; width: 100%; height: 236px; padding: 15px;">\n' +
      "<tbody>\n" +
      '<tr style="height: 17px; padding: 15px;">\n' +
      '<td style="width: 28%; height: 17px; text-align: center; padding: 15px;"><img src="https://kfg6bckb.media.zestyio.com/devices.png" data-id="3-c82234d-k493kx" title="devices.png" alt="devices.png" /></td>\n' +
      '<td style="width: 32.8267%; height: 17px; text-align: center; padding: 15px;"><img src="https://kfg6bckb.media.zestyio.com/version.png" data-id="3-c822375-wj4f5r" title="version.png" alt="version.png" width="95" height="95" /></td>\n' +
      '<td style="width: 32.8267%; height: 17px; text-align: center; padding: 15px;"><img src="https://kfg6bckb.media.zestyio.com/zoom.png" data-id="3-c8223e2-8m5l09" title="zoom.png" alt="zoom.png" width="95" height="95" /></td>\n' +
      "</tr>\n" +
      '<tr style="height: 10px; padding: 15px;">\n' +
      '<td style="width: 32.8267%; height: 10px; text-align: center;"><strong>Simple Content Management</strong></td>\n' +
      '<td style="width: 32.8267%; height: 10px; text-align: center;"><strong>Automatic Version Control</strong></td>\n' +
      '<td style="width: 32.8267%; height: 10px; text-align: center;"><strong>Improved SEO Rankings</strong></td>\n' +
      "</tr>\n" +
      '<tr style="height: 209px; padding: 15px;">\n' +
      '<td style="width: 28%; height: 209px; padding: 15px;">\n' +
      '<p dir="ltr" role="presentation">✔ Non-technical users can create and manage content without code</p>\n' +
      '<p dir="ltr" role="presentation">✔ API-first architecture for developers to build any experience</p>\n' +
      '<p dir="ltr" role="presentation">✔ Stage environment to instantly view changes before going live</p>\n' +
      "</td>\n" +
      '<td style="width: 32.8267%; height: 209px; padding: 15px;">\n' +
      '<p dir="ltr" role="presentation">✔ Roll back to any previous version of content</p>\n' +
      '<p dir="ltr" role="presentation">✔ Schedule versions to publish in the future</p>\n' +
      '<p dir="ltr" role="presentation">✔ View multiple versions at once to see differences</p>\n' +
      "</td>\n" +
      '<td style="width: 32.8267%; height: 209px; padding: 15px;">\n' +
      '<p dir="ltr" role="presentation">✔ Sub-second page load times</p>\n' +
      '<p dir="ltr" role="presentation">✔ Automatic search engine tagging and social graphic generation</p>\n' +
      '<p dir="ltr" role="presentation">✔ No external plugins needed, resulting in fewer broken websites</p>\n' +
      "</td>\n" +
      "</tr>\n" +
      "</tbody>\n" +
      "</table>\n" +
      "</div>",
    rich_media: null,
    text_content: null,
    meta_keywords: null,
    meta_description:
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "Simple Content Management\n" +
      "\n" +
      "\n" +
      "Empower any user to create and manage content\n" +
      "\n" +
      "\n" +
      "Flexibility for developers to create any output\n" +
      "\n" +
      "\n" +
      "Stage environment ",
    meta_title: "Gained Benefits",
    uri: null,
  },
  {
    lang_id: "1",
    title: "APIs and Developer Tools",
    sub_parent: "7-ee988ebe90-9rvvf6",
    sort_order: "1",
    layout: "product_section_layout_3",
    media_content:
      '<table border="0" style="border-collapse: collapse; width: 100%; height: 40px;">\n' +
      "<tbody>\n" +
      '<tr style="height: 20px;">\n' +
      '<td style="width: 16.3175%; height: 20px; text-align: center;"><a href="https://www.zesty.org"><img src="https://kfg6bckb.media.zestyio.com/zesty-io-logo-dark--1-.png" data-id="3-aa8ff30-k0bf8" title="zesty-io-logo-dark--1-.png" alt="zesty-io-logo-dark--1-.png" width="46" height="42" /></a></td>\n' +
      '<td style="width: 16.3175%; height: 20px;"><a href="https://instances-api.zesty.org/?version=latest"><img src="https://kfg6bckb.media.zestyio.com/cloud--7-.png" data-id="3-aa900b5-3qfo3" title="cloud--7-.png" alt="cloud--7-.png" width="45" height="45" style="display: block; margin-left: auto; margin-right: auto;" /></a></td>\n' +
      '<td style="width: 16.3175%; height: 20px;"><a href="https://accounts-api.zesty.org/?version=latest"><img src="https://kfg6bckb.media.zestyio.com/user--1-.png" data-id="3-aa8ff93-tah4w" title="user--1-.png" alt="user--1-.png" width="45" height="45" style="display: block; margin-left: auto; margin-right: auto;" /></a></td>\n' +
      '<td style="width: 16.3175%; height: 20px;"><a href="https://auth-api.zesty.org/?version=latest"><img src="https://kfg6bckb.media.zestyio.com/shield--1-.png" data-id="3-aa8ffbb-vz12e" title="shield--1-.png" alt="shield--1-.png" width="46" height="46" style="display: block; margin-left: auto; margin-right: auto;" /></a></td>\n' +
      '<td style="width: 16.3175%; height: 20px;"><a href="https://zesty.org/tools/node-sdk"><img src="https://kfg6bckb.media.zestyio.com/nodejs-dark.png" data-id="3-aa9003a-r1rbv" title="nodejs-dark.png" alt="nodejs-dark.png" style="display: block; margin-left: auto; margin-right: auto;" /></a></td>\n' +
      '<td style="width: 16.3175%; height: 20px;"><a href="http://parsley.zesty.io/"><img src="https://kfg6bckb.media.zestyio.com/parsley-logo.png" data-id="3-aa9007b-q5wax" title="parsley-logo.png" alt="parsley-logo.png" style="display: block; margin-left: auto; margin-right: auto;" /></a></td>\n' +
      "</tr>\n" +
      '<tr style="height: 20px;">\n' +
      '<td style="width: 16.3175%; height: 20px; text-align: center;"><a href="https://zesty.org/">Zesty.org</a></td>\n' +
      '<td style="width: 16.3175%; height: 20px; text-align: center;"><a href="https://instances-api.zesty.org/?version=latest">Instances API</a></td>\n' +
      '<td style="width: 16.3175%; height: 20px; text-align: center;"><a href="https://accounts-api.zesty.org/?version=latest">Accounts API</a></td>\n' +
      '<td style="width: 16.3175%; height: 20px; text-align: center;"><a href="https://auth-api.zesty.org/?version=latest">Authentication API</a></td>\n' +
      '<td style="width: 16.3175%; height: 20px; text-align: center;"><a href="https://zesty.org/tools/node-sdk">Node SDK</a></td>\n' +
      '<td style="width: 16.3175%; height: 20px; text-align: center;"><a href="http://parsley.zesty.io/">Parsley REPL</a></td>\n' +
      "</tr>\n" +
      "</tbody>\n" +
      "</table>\n" +
      "<p></p>",
    rich_media: null,
    text_content: "",
    meta_keywords: null,
    meta_description: "",
    meta_title: "APIs and Developer Tools to Support Your Build",
    uri: null,
  },
  {
    lang_id: "1",
    title: "Zesty.io WebEngine Benefits",
    sub_parent: "7-e2929598b8-t30257",
    sort_order: "1",
    layout: "product_section_layout_3",
    media_content:
      "<div>\n" +
      '<table border="0" style="border: none; width: 100%; height: 236px; padding: 15px;">\n' +
      "<tbody>\n" +
      '<tr style="height: 17px; padding: 15px;">\n' +
      '<td style="width: 28%; height: 17px; text-align: center; padding: 15px;"><img src="https://kfg6bckb.media.zestyio.com/startup.png" data-id="3-c824a3f-x8ppsb" title="startup.png" alt="startup.png" width="111" height="111" /></td>\n' +
      '<td style="width: 32.8267%; height: 17px; text-align: center; padding: 15px;"><img src="https://kfg6bckb.media.zestyio.com/filter.png" data-id="3-c824a75-srpq0t" title="filter.png" alt="filter.png" width="113" height="113" /></td>\n' +
      '<td style="width: 32.8267%; height: 17px; text-align: center; padding: 15px;"><img src="https://kfg6bckb.media.zestyio.com/zoom.png" data-id="3-c8223e2-8m5l09" title="zoom.png" alt="zoom.png" width="95" height="95" /></td>\n' +
      "</tr>\n" +
      '<tr style="height: 10px; padding: 15px;">\n' +
      '<td style="width: 32.8267%; height: 10px; text-align: center;"><strong>100% Faster Deployments</strong></td>\n' +
      '<td style="width: 32.8267%; height: 10px; text-align: center;"><strong>Increased Conversions</strong></td>\n' +
      '<td style="width: 32.8267%; height: 10px; text-align: center;"><strong>Improved SEO Rankings</strong></td>\n' +
      "</tr>\n" +
      '<tr style="height: 209px; padding: 15px;">\n' +
      '<td style="width: 28%; height: 209px; padding: 15px;">\n' +
      '<p dir="ltr" role="presentation">✔ CDN and hosting out of the box</p>\n' +
      '<p dir="ltr" role="presentation">✔ Preview code and content changes before going live</p>\n' +
      '<p dir="ltr" role="presentation">✔ Instant page builds and cache purge</p>\n' +
      "</td>\n" +
      '<td style="width: 32.8267%; height: 209px; padding: 15px;">\n' +
      '<p dir="ltr" role="presentation">✔ 70% faster experiences means happy customers</p>\n' +
      '<p dir="ltr" role="presentation">✔ Optimized for hyper-personalized experiences</p>\n' +
      '<p dir="ltr" role="presentation">✔ Iterate on site UX/UI without full rebuilds</p>\n' +
      "</td>\n" +
      '<td style="width: 32.8267%; height: 209px; padding: 15px;">\n' +
      '<p dir="ltr" role="presentation">✔ Sub-second page load times to impress Google</p>\n' +
      '<p dir="ltr" role="presentation">✔ Automated search engine tagging and social graphics&nbsp;</p>\n' +
      '<p dir="ltr" role="presentation">✔ No external plugins needed, resulting in far fewer broken websites and pages</p>\n' +
      "</td>\n" +
      "</tr>\n" +
      "</tbody>\n" +
      "</table>\n" +
      "</div>",
    rich_media: null,
    text_content:
      "<p>Zesty.io&rsquo;s tool that builds, renders, and delivers webpages at 99.99% uptime in addition to providing all of the benefits of a headless CMS.</p>",
    meta_keywords: null,
    meta_description:
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "Instant Deployment\n" +
      "\n" +
      "\n" +
      "CDN and Hosting included\n" +
      "\n" +
      "\n" +
      "Preview changes before sending live\n" +
      "\n" +
      "\n" +
      "Instant page builds and cache purge\n" +
      "\n" +
      "\n" +
      "\n" +
      "\n" +
      "Increased Conversi",
    meta_title: "Gained Benefits",
    uri: null,
  },
  {
    lang_id: "1",
    title: "Content Management",
    sub_parent: "7-d0a88ca18e-m5v2jl",
    sort_order: "1",
    layout: "product_section_layout_1",
    media_content:
      '<p><img src="https://kfg6bckb.media.zestyio.com/instant-previews-in-zestyio.png" data-id="3-a9ba3bf-nj3cx" title="instant-previews-in-zestyio.png" alt="instant-previews-in-zestyio.png" /></p>',
    rich_media: null,
    text_content:
      "<p>Manage content for multiple brands, multiple websites, and multiple destinations in one central hub, regardless of destination or presentation. Simplify your workflow without sacrificing ease of use or development flexibility.</p>\n" +
      "<p>Other systems require plugins, upgrades, and updates - scroll down to learn more about all of the features that come natively to Zesty.io that power your content velocity.</p>\n" +
      "<h3>Your Content, Anywhere.</h3>\n" +
      '<p><br /><a href="https://www.zesty.io/platform/content-management/"><button class="button is-success">Learn More About Content Management in Zesty.io</button> </a></p>',
    meta_keywords: null,
    meta_description: "",
    meta_title: "Content Management",
    uri: null,
  },
  {
    lang_id: "1",
    title: "Instant JSON API",
    sub_parent: "7-ee988ebe90-9rvvf6",
    sort_order: "2",
    layout: "product_section_layout_3",
    media_content:
      '<p><img src="https://kfg6bckb.media.zestyio.com/instant-api-example-zestyio.png" data-id="3-a755f53-pwl8n" title="instant-api-example-zestyio.png" alt="instant-api-example-zestyio.png" /></p>',
    rich_media: null,
    text_content:
      '<h3 dir="ltr">Automated Read Only JSON APIs for instant consumption of published, staged, or versioned data.</h3>\n' +
      "<ul>\n" +
      '<li dir="ltr" style="list-style-type: disc;" aria-level="1">\n' +
      '<p dir="ltr" role="presentation">Quickly prototype headless applications</p>\n' +
      "</li>\n" +
      '<li dir="ltr" style="list-style-type: disc;" aria-level="1">\n' +
      '<p dir="ltr" role="presentation">Instantly access all entries in a content model via JSON</p>\n' +
      "</li>\n" +
      "</ul>",
    meta_keywords: null,
    meta_description: "",
    meta_title: "Instant JSON API",
    uri: null,
  },
  {
    lang_id: "1",
    title: "Automatic Page Builds",
    sub_parent: "7-e2929598b8-t30257",
    sort_order: "2",
    layout: "product_section_layout_3",
    media_content:
      '<p><img src="https://kfg6bckb.media.zestyio.com/instant-api-example-zestyio.png" data-id="3-a755f53-pwl8n" title="instant-api-example-zestyio.png" alt="instant-api-example-zestyio.png" /></p>',
    rich_media: null,
    text_content:
      '<p dir="ltr">WebEngine automatically connects headless content structures to renderable templates. Build views in a stage environment, preview them instantly, and globally distribute upon publishing.</p>',
    meta_keywords: null,
    meta_description: "",
    meta_title: "Automatic Page Builds",
    uri: null,
  },
  {
    lang_id: "1",
    title: "Global Caching for Internet Scale",
    sub_parent: "7-d8eef8ab8e-6jc40w",
    sort_order: "2",
    layout: "product_section_layout_1",
    media_content:
      '<p><img src="https://kfg6bckb.media.zestyio.com/pop-endpoints-fastly-zesty.png" data-id="3-a605d8f-dixx7" title="pop-endpoints-fastly-zesty.png" alt="pop-endpoints-fastly-zesty.png" /></p>',
    rich_media: null,
    text_content:
      '<h3 data-pm-slice="0 0 []">Content gets cached on over 200 POP endpoints across the world.</h3>\n' +
      '<p data-pm-slice="0 0 []">Your customers download the closest cached file (HTML, JSON, media, etc). Caching is instantly refreshed upon content editors publishing new data.</p>\n' +
      "<p>All page and media files are delivered through Zesty.io cloud's partner Fastly. The map shows all the Point of Presence (POP) servers across the World in which Zesty.io files are served through Fastly.</p>",
    meta_keywords: null,
    meta_description: "",
    meta_title: "Global Caching for Internet Scale",
    uri: null,
  },
  {
    lang_id: "1",
    title: "Manage Any and All Files",
    sub_parent: "7-c0dcdbd1bf-d69tgb",
    sort_order: "2",
    layout: "product_section_layout_3",
    media_content:
      '<p><img src="https://kfg6bckb.media.zestyio.com/file-types-for-custom-endpoints.png" data-id="3-aa210df-gjmoi" title="file-types-for-custom-endpoints.png" alt="file-types-for-custom-endpoints.png" /></p>',
    rich_media: null,
    text_content:
      '<h3 data-pm-slice="0 0 []">Many file types may be uploaded to our DAM.</h3>\n' +
      '<ul data-guid="363a9479-8597-00e7-abb2-c414808c68a7">\n' +
      "<li>Upload images (PNG, JPG, GIF) and Video (MP4, OGG)</li>\n" +
      "<li>Upload static files such as PDFs</li>\n" +
      "<li>Upload site files like Fonts (OTF, WOFF, TTF), SVGs, YAML, Markdown, Javascript, CSS, etc.</li>\n" +
      "</ul>",
    meta_keywords: null,
    meta_description: "",
    meta_title: "Manage Any and All Files",
    uri: null,
  },
  {
    lang_id: "1",
    title: "Headless APIs",
    sub_parent: "7-d0a88ca18e-m5v2jl",
    sort_order: "2",
    layout: "product_section_layout_3",
    media_content:
      '<table border="0" style="border-collapse: collapse; width: 100%; height: 40px;">\n' +
      "<tbody>\n" +
      '<tr style="height: 20px;">\n' +
      '<td style="width: 16.3175%; height: 20px; text-align: center;"><a href="https://www.zesty.org"><img src="https://kfg6bckb.media.zestyio.com/zesty-io-logo-dark--1-.png" data-id="3-aa8ff30-k0bf8" title="zesty-io-logo-dark--1-.png" alt="zesty-io-logo-dark--1-.png" width="46" height="42" /></a></td>\n' +
      '<td style="width: 16.3175%; height: 20px;"><a href="https://instances-api.zesty.org/?version=latest"><img src="https://kfg6bckb.media.zestyio.com/cloud--7-.png" data-id="3-aa900b5-3qfo3" title="cloud--7-.png" alt="cloud--7-.png" width="45" height="45" style="display: block; margin-left: auto; margin-right: auto;" /></a></td>\n' +
      '<td style="width: 16.3175%; height: 20px;"><a href="https://accounts-api.zesty.org/?version=latest"><img src="https://kfg6bckb.media.zestyio.com/user--1-.png" data-id="3-aa8ff93-tah4w" title="user--1-.png" alt="user--1-.png" width="45" height="45" style="display: block; margin-left: auto; margin-right: auto;" /></a></td>\n' +
      '<td style="width: 16.3175%; height: 20px;"><a href="https://auth-api.zesty.org/?version=latest"><img src="https://kfg6bckb.media.zestyio.com/shield--1-.png" data-id="3-aa8ffbb-vz12e" title="shield--1-.png" alt="shield--1-.png" width="46" height="46" style="display: block; margin-left: auto; margin-right: auto;" /></a></td>\n' +
      '<td style="width: 16.3175%; height: 20px;"><a href="https://zesty.org/tools/node-sdk"><img src="https://kfg6bckb.media.zestyio.com/nodejs-dark.png" data-id="3-aa9003a-r1rbv" title="nodejs-dark.png" alt="nodejs-dark.png" style="display: block; margin-left: auto; margin-right: auto;" /></a></td>\n' +
      '<td style="width: 16.3175%; height: 20px;"><a href="http://parsley.zesty.io/"><img src="https://kfg6bckb.media.zestyio.com/parsley-logo.png" data-id="3-aa9007b-q5wax" title="parsley-logo.png" alt="parsley-logo.png" style="display: block; margin-left: auto; margin-right: auto;" /></a></td>\n' +
      "</tr>\n" +
      '<tr style="height: 20px;">\n' +
      '<td style="width: 16.3175%; height: 20px; text-align: center;"><a href="https://zesty.org/">Zesty.org</a></td>\n' +
      '<td style="width: 16.3175%; height: 20px; text-align: center;"><a href="https://instances-api.zesty.org/?version=latest">Instances API</a></td>\n' +
      '<td style="width: 16.3175%; height: 20px; text-align: center;"><a href="https://accounts-api.zesty.org/?version=latest">Accounts API</a></td>\n' +
      '<td style="width: 16.3175%; height: 20px; text-align: center;"><a href="https://auth-api.zesty.org/?version=latest">Authentication API</a></td>\n' +
      '<td style="width: 16.3175%; height: 20px; text-align: center;"><a href="https://zesty.org/tools/node-sdk">Node SDK</a></td>\n' +
      '<td style="width: 16.3175%; height: 20px; text-align: center;"><a href="http://parsley.zesty.io/">Parsley REPL</a></td>\n' +
      "</tr>\n" +
      "</tbody>\n" +
      "</table>\n" +
      "<p></p>\n" +
      "<p><br /><br /></p>\n" +
      "<p></p>\n" +
      '<p style="text-align: center;"><a href="https://www.zesty.io/platform/headless-apis/"><button class="button is-success">Learn More About Zesty.io\'s Headless Capabilities</button> </a></p>\n' +
      '<p style="text-align: center;"></p>',
    rich_media: null,
    text_content:
      "<h2>Developer Tools to Support You</h2>\n" +
      "<p>A powerful headless Content Management System with web capabilities. Complete developer flexibility - APIs and SDKs to support your build, wherever your content takes you.</p>\n" +
      "<p>Use automated Read Only JSON APIs for instant consumption of published, staged, or versioned data, or our fully documented REST API to control, create, and access anything you build in the Zesty.io system.</p>",
    meta_keywords: null,
    meta_description: "",
    meta_title: "Headless APIs",
    uri: null,
  },
  {
    lang_id: "1",
    title: "API First Content Management",
    sub_parent: "7-8adbf7cb94-w10vkt",
    sort_order: "2",
    layout: "product_section_layout_2",
    media_content:
      '<p><img src="https://kfg6bckb.media.zestyio.com/zestyio-api-first-content-management-dxp.png?height=500" data-id="3-c822755-07t19p" title="zestyio-api-first-content-management-dxp.png" alt="zestyio-api-first-content-management-dxp.png" style="float: right;" /></p>',
    rich_media: null,
    text_content:
      '<p dir="ltr">Zesty.io is a hybrid headless CMS, meaning it has all the API-driven flexibility a developer needs to innovate, and all the no-code environments a marketer needs to create content at scale.</p>\n' +
      "<ul>\n" +
      '<li dir="ltr" style="list-style-type: disc;" aria-level="1">\n' +
      '<p dir="ltr" role="presentation"><strong>JSON APIs</strong>: Instantly access all content in any bespoke content model using our Instant JSON API</p>\n' +
      "</li>\n" +
      '<li dir="ltr" style="list-style-type: disc;" aria-level="1">\n' +
      '<p dir="ltr" role="presentation"><strong>Custom Endpoints</strong>: Build your own endpoints and automatically update content. Once the endpoint is built, any and all content changes will push to your websites and touchpoints instantly.</p>\n' +
      "</li>\n" +
      '<li dir="ltr" style="list-style-type: disc;" aria-level="1">\n' +
      '<p dir="ltr" role="presentation"><span style="letter-spacing: 0px;"><strong>No-code Content Authoring</strong>: Non-technical content authors can build, preview, and update headless content without relying on developers.</span></p>\n' +
      "</li>\n" +
      "</ul>",
    meta_keywords: null,
    meta_description: "",
    meta_title: "API First Content Management",
    uri: null,
  },
  {
    lang_id: "1",
    title: "Full Rest API",
    sub_parent: "7-ee988ebe90-9rvvf6",
    sort_order: "3",
    layout: "product_section_layout_2",
    media_content:
      '<p><img src="https://kfg6bckb.media.zestyio.com/zestyio-full-rest-api-diagram--1-.png" data-id="3-c824087-63jfx8" title="zestyio-full-rest-api-diagram--1-.png" alt="zestyio-full-rest-api-diagram--1-.png" /></p>',
    rich_media: null,
    text_content:
      '<h3 dir="ltr">Fully documented REST API to control, create, and access anything you build in the Zesty.io system.</h3>\n' +
      '<p dir="ltr">Customer developers or 3rd party developers are able to build against our API, provide open source solutions, and integrate our system into other software.</p>\n' +
      "<p></p>\n" +
      '<p><a href="https://instances-api.zesty.org/?version=latest"><button class="button is-link is-outlined">Learn More</button> </a></p>',
    meta_keywords: null,
    meta_description: "",
    meta_title: "Full Rest API",
    uri: null,
  },
];

describe("PlatformList pagination", () => {
  it("should render the initial page correctly", async () => {
    render(<PlatformList data={mockData} />);

    expect(
      screen.getByText((content, element) => {
        return content === "Page 1";
      })
    ).toBeDefined();
    expect(screen.getByText("Next")).toBeDefined();
    expect(screen.queryByText("Previous")).toHaveProperty("disabled", true);
  });

  it("should navigate to the next page correctly", async () => {
    render(<PlatformList data={mockData} />);

    act(() => {
      fireEvent.click(screen.getByText("Next"));
    });

    expect(
      screen.getByText((content, element) => {
        return content === "Page 2";
      })
    ).toBeDefined();
    expect(screen.queryByText("Previous")).toHaveProperty("disabled", false);
    expect(screen.queryByText("Next")).toHaveProperty("disabled", true);
  });

  it("should navigate to the previous page correctly", async () => {
    render(<PlatformList data={mockData} />);

    await act(() => {
      fireEvent.click(screen.getByText("Next"));
    });

    await act(() => {
      fireEvent.click(screen.getByText("Previous"));
    });

    expect(
      screen.getByText((content, element) => {
        return content === "Page 1";
      })
    ).toBeDefined();
    expect(screen.queryByText("Previous")).toHaveProperty("disabled", true);
    expect(screen.queryByText("Next")).toHaveProperty("disabled", false);
  });
});
