"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next-themes"
const external_next_themes_namespaceObject = require("next-themes");
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./data/siteMetadata.js
var siteMetadata = __webpack_require__(1576);
var siteMetadata_default = /*#__PURE__*/__webpack_require__.n(siteMetadata);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
;// CONCATENATED MODULE: ./components/analytics/GoogleAnalytics.js



const GAScript = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                src: `https://www.googletagmanager.com/gtag/js?id=${(siteMetadata_default()).analytics.googleAnalyticsId}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                id: "ga-script",
                children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${(siteMetadata_default()).analytics.googleAnalyticsId}', {
              page_path: window.location.pathname,
            });
        `
            })
        ]
    });
};
/* harmony default export */ const GoogleAnalytics = (GAScript);
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const logEvent = (action, category, label, value)=>{
    var ref;
    (ref = window.gtag) === null || ref === void 0 ? void 0 : ref.call(window, "event", action, {
        event_category: category,
        event_label: label,
        value: value
    });
};

;// CONCATENATED MODULE: ./components/analytics/Plausible.js



const PlausibleScript = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                "data-domain": (siteMetadata_default()).analytics.plausibleDataDomain,
                src: "https://plausible.io/js/plausible.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                id: "plausible-script",
                children: `
            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
        `
            })
        ]
    });
};
/* harmony default export */ const Plausible = (PlausibleScript);
// https://plausible.io/docs/custom-event-goals
const Plausible_logEvent = (eventName, ...rest)=>{
    var ref;
    return (ref = window.plausible) === null || ref === void 0 ? void 0 : ref.call(window, eventName, ...rest);
};

;// CONCATENATED MODULE: ./components/analytics/SimpleAnalytics.js


const SimpleAnalyticsScript = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                id: "sa-script",
                children: `
            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};
        `
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                src: "https://scripts.simpleanalyticscdn.com/latest.js"
            })
        ]
    });
};
// https://docs.simpleanalytics.com/events
const SimpleAnalytics_logEvent = (eventName, callback)=>{
    if (callback) {
        var ref;
        return (ref = window.sa_event) === null || ref === void 0 ? void 0 : ref.call(window, eventName, callback);
    } else {
        var ref1;
        return (ref1 = window.sa_event) === null || ref1 === void 0 ? void 0 : ref1.call(window, eventName);
    }
};
/* harmony default export */ const SimpleAnalytics = (SimpleAnalyticsScript);

;// CONCATENATED MODULE: ./components/analytics/Umami.js



const UmamiScript = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
            async: true,
            defer: true,
            "data-website-id": (siteMetadata_default()).analytics.umamiWebsiteId,
            src: "https://umami.example.com/umami.js" // Replace with your umami instance
        })
    });
};
/* harmony default export */ const Umami = (UmamiScript);

;// CONCATENATED MODULE: ./components/analytics/index.js






const isProduction = "production" === "production";
const Analytics = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            isProduction && (siteMetadata_default()).analytics.plausibleDataDomain && /*#__PURE__*/ jsx_runtime_.jsx(Plausible, {}),
            isProduction && (siteMetadata_default()).analytics.simpleAnalytics && /*#__PURE__*/ jsx_runtime_.jsx(SimpleAnalytics, {}),
            isProduction && (siteMetadata_default()).analytics.umamiWebsiteId && /*#__PURE__*/ jsx_runtime_.jsx(Umami, {}),
            isProduction && (siteMetadata_default()).analytics.googleAnalyticsId && /*#__PURE__*/ jsx_runtime_.jsx(GoogleAnalytics, {})
        ]
    });
};
/* harmony default export */ const analytics = (Analytics);

;// CONCATENATED MODULE: ./data/headerNavLinks.js
const headerNavLinks = [
    {
        href: "/blog",
        title: "Blog"
    },
    {
        href: "/tags",
        title: "Tags"
    },
    {
        href: "/projects",
        title: "Projects"
    },
    {
        href: "/about",
        title: "About"
    }, 
];
/* harmony default export */ const data_headerNavLinks = (headerNavLinks);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./data/logo.svg
var _path, _g;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgLogo = function SvgLogo(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    height: 46,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 337 90",
    className: "logo_svg__iconLeft"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M111.318 63.316q-.615 0-.967-.351-.351-.395-.351-1.01V21.676q0-.615.351-1.01.352-.395.967-.395h23.763q.658 0 1.054.351.351.396.351 1.054v.923q0 .615-.395 1.01-.396.351-1.01.351h-21.216v16.56h19.986q.659 0 1.054.351.351.352.351 1.054v.923q0 .615-.395.966-.395.395-1.01.395h-19.986v17.746q0 .615-.395 1.01-.395.351-1.01.351h-1.142Zm41.508.615q-2.943 0-5.447-1.23-2.547-1.23-4.04-3.338-1.494-2.064-1.494-4.612 0-4.04 3.294-6.632 3.294-2.592 8.873-3.295l9.707-1.361V41.31q0-3.382-2.065-5.227-2.064-1.8-6.28-1.8-3.163 0-5.14 1.23-2.02 1.23-2.547 2.942-.264.747-.571 1.055-.352.263-.923.263h-.834q-.571 0-.967-.395-.395-.396-.395-.967 0-1.361 1.23-3.162t3.821-3.163q2.548-1.361 6.325-1.361 6.589 0 9.356 3.118 2.767 3.163 2.767 7.643v20.469q0 .615-.395 1.01-.351.351-.966.351h-1.054q-.615 0-.967-.351-.395-.395-.395-1.01v-2.9q-1.362 2.065-3.953 3.47-2.636 1.406-6.94 1.406Zm.615-3.558q4.524 0 7.379-2.943 2.899-2.986 2.899-8.52v-2.065l-7.906 1.098q-5.052.659-7.643 2.328-2.592 1.669-2.592 4.173 0 2.855 2.372 4.392 2.372 1.537 5.49 1.537Zm35.314 3.558q-6.632 0-9.795-4.348-3.162-4.305-3.382-10.542l-.044-1.713.044-1.713q.22-6.237 3.382-10.542 3.163-4.348 9.795-4.348 6.72 0 10.323 4.875V21.018q0-.615.395-1.01.351-.352.966-.352h1.054q.615 0 .967.351.395.396.395 1.01v40.938q0 .615-.395 1.01-.352.351-.967.351h-1.054q-.615 0-.966-.351-.395-.395-.395-1.01v-2.9q-3.558 4.876-10.323 4.876Zm.352-3.558q4.875 0 7.335-3.25 2.46-3.206 2.636-7.599.087-.615.087-2.372 0-1.8-.087-2.416-.044-2.635-1.142-5.007-1.142-2.372-3.339-3.91-2.196-1.536-5.49-1.536-4.964 0-7.248 3.162-2.328 3.163-2.503 8.17l-.088 1.713q0 5.71 2.24 9.356 2.196 3.69 7.599 3.69ZM218.272 75q-.483 0-.878-.351-.352-.396-.352-.879 0-.307.352-1.23l4.744-11.069L210.41 33.8q-.395-.922-.395-1.23 0-.483.395-.878.351-.351.835-.351h1.317q.967 0 1.406.922l10.322 24.334 10.586-24.334q.483-.922 1.405-.922h1.23q.483 0 .878.351.352.395.352.879 0 .307-.352 1.23l-17.481 40.278q-.44.922-1.406.922h-1.23Zm45.33-11.684q-.615 0-1.01-.351-.352-.395-.352-1.01V21.633q0-.615.352-1.01.395-.352 1.01-.352h1.142q.615 0 1.01.351.351.396.351 1.01v40.323q0 .615-.351 1.01-.395.351-1.01.351h-1.142Zm11.2 5.183q-.527 0-.878-.395-.352-.351-.352-.835 0-.263.176-.746l21.128-50.6q.131-.308.483-.616.351-.307.878-.307h1.054q.484 0 .879.351.351.352.351.879 0 .22-.175.703l-21.172 50.644q-.132.307-.439.615-.351.307-.922.307h-1.01Zm45.681-4.568q-15.812 0-16.252-16.954-.044-1.845-.044-5.183 0-3.339.044-5.183.264-8.346 4.568-12.65 4.305-4.305 11.684-4.305 7.38 0 11.684 4.304 4.304 4.305 4.524 12.65.132 3.69.132 5.184 0 1.493-.132 5.183-.395 16.954-16.208 16.954Zm0-3.69q5.535 0 8.829-3.338 3.294-3.382 3.514-10.234.132-3.69.132-4.875 0-1.186-.132-4.876-.22-6.852-3.558-10.234-3.338-3.338-8.785-3.338-5.49 0-8.785 3.338-3.338 3.382-3.601 10.234-.044 1.845-.044 4.876 0 3.03.044 4.875.263 6.852 3.557 10.234 3.295 3.339 8.83 3.339Z",
    fill: "#fff"
  })), _g || (_g = /*#__PURE__*/external_react_.createElement("g", {
    clipRule: "evenodd",
    fill: "#fff"
  }, /*#__PURE__*/external_react_.createElement("path", {
    d: "M45 22.28c-12.528 0-22.72 10.192-22.72 22.72 0 12.528 10.191 22.721 22.72 22.721S67.72 57.528 67.72 45 57.528 22.28 45 22.28zm9.062 14.47H41.507v7.17h10.865v2.731H41.507v10.518h-3.063V34.018h15.618v2.732z"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M45 0C20.147 0 0 20.146 0 45c0 24.853 20.147 45 45 45s45-20.147 45-45C90 20.146 69.853 0 45 0zm0 70.378c-13.993 0-25.377-11.384-25.377-25.378 0-13.993 11.384-25.378 25.377-25.378S70.377 31.007 70.377 45c0 13.994-11.384 25.378-25.377 25.378z"
  }))));
};

/* harmony default export */ const logo = (SvgLogo);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(7233);
// EXTERNAL MODULE: ./components/SectionContainer.js
var SectionContainer = __webpack_require__(890);
// EXTERNAL MODULE: ./components/social-icons/index.js + 6 modules
var social_icons = __webpack_require__(2557);
;// CONCATENATED MODULE: ./components/Footer.js




function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mt-16 flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-3 flex space-x-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "mail",
                            href: `mailto:${(siteMetadata_default()).email}`,
                            size: "6"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "github",
                            href: (siteMetadata_default()).github,
                            size: "6"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "youtube",
                            href: (siteMetadata_default()).youtube,
                            size: "6"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "linkedin",
                            href: (siteMetadata_default()).linkedin,
                            size: "6"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "twitter",
                            href: (siteMetadata_default()).twitter,
                            size: "6"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: (siteMetadata_default()).author
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: ` • `
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: `© ${new Date().getFullYear()}`
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: ` • `
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                            href: "/",
                            children: (siteMetadata_default()).title
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mb-8 text-sm text-gray-500 dark:text-gray-400",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                        href: "https://github.com/fady0/my-site",
                        children: "The Source Code For This website"
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/MobileNav.js




const MobileNav = ()=>{
    const { 0: navShow , 1: setNavShow  } = (0,external_react_.useState)(false);
    const onToggleNav = ()=>{
        setNavShow((status)=>{
            if (status) {
                document.body.style.overflow = "auto";
            } else {
                // Prevent scrolling
                document.body.style.overflow = "hidden";
            }
            return !status;
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "sm:hidden",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                className: "ml-1 mr-1 h-8 w-8 rounded py-1",
                "aria-label": "Toggle Menu",
                onClick: onToggleNav,
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    className: "text-gray-900 dark:text-gray-100",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                        clipRule: "evenodd"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `fixed top-0 left-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ${navShow ? "translate-x-0" : "translate-x-full"}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex justify-end",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            className: "mr-5 mt-11 h-8 w-8 rounded",
                            "aria-label": "Toggle Menu",
                            onClick: onToggleNav,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                className: "text-gray-900 dark:text-gray-100",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                    clipRule: "evenodd"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "fixed mt-8 h-full",
                        children: data_headerNavLinks.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "px-12 py-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                    href: link.href,
                                    className: "text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100",
                                    onClick: onToggleNav,
                                    children: link.title
                                })
                            }, link.title)
                        )
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_MobileNav = (MobileNav);

;// CONCATENATED MODULE: ./components/ThemeSwitch.js



const ThemeSwitch = ()=>{
    const { 0: mounted , 1: setMounted  } = (0,external_react_.useState)(false);
    const { theme , setTheme , resolvedTheme  } = (0,external_next_themes_namespaceObject.useTheme)();
    // When mounted on client, now we can show the UI
    (0,external_react_.useEffect)(()=>setMounted(true)
    , []);
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        "aria-label": "Toggle Dark Mode",
        type: "button",
        className: "ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4",
        onClick: ()=>setTheme(theme === "dark" || resolvedTheme === "dark" ? "light" : "dark")
        ,
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            className: "text-gray-900 dark:text-gray-100",
            children: mounted && (theme === "dark" || resolvedTheme === "dark") ? /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                clipRule: "evenodd"
            }) : /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            })
        })
    });
};
/* harmony default export */ const components_ThemeSwitch = (ThemeSwitch);

;// CONCATENATED MODULE: ./components/LayoutWrapper.js









const LayoutWrapper = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(SectionContainer/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex h-screen flex-col justify-between",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                    className: "flex items-center justify-between py-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                href: "/",
                                "aria-label": (siteMetadata_default()).headerTitle,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mr-3",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(logo, {})
                                        }),
                                        typeof (siteMetadata_default()).headerTitle === "string" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "hidden h-6 text-2xl font-semibold sm:block",
                                            children: (siteMetadata_default()).headerTitle
                                        }) : (siteMetadata_default()).headerTitle
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center text-base leading-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "hidden sm:block",
                                    children: data_headerNavLinks.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                            href: link.href,
                                            className: "p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4",
                                            children: link.title
                                        }, link.title)
                                    )
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(components_ThemeSwitch, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(components_MobileNav, {})
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: "mb-auto",
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
            ]
        })
    });
};
/* harmony default export */ const components_LayoutWrapper = (LayoutWrapper);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/ClientReload.js


/**
 * Client-side complement to next-remote-watch
 * Re-triggers getStaticProps when watched mdx files change
 *
 */ const ClientReload = ()=>{
    // Exclude socket.io from prod bundle
    (0,external_react_.useEffect)(()=>{
        Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 4612)).then((module)=>{
            const socket = module.io();
            socket.on("reload", (data)=>{
                router_default().replace((router_default()).asPath, undefined, {
                    scroll: false
                });
            });
        });
    }, []);
    return null;
};

;// CONCATENATED MODULE: ./pages/_app.js











const isDevelopment = "production" === "development";
const isSocket = process.env.SOCKET;
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_next_themes_namespaceObject.ThemeProvider, {
        attribute: "class",
        defaultTheme: (siteMetadata_default()).theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    content: "width=device-width, initial-scale=1",
                    name: "viewport"
                })
            }),
            isDevelopment && isSocket && /*#__PURE__*/ jsx_runtime_.jsx(ClientReload, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(analytics, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_LayoutWrapper, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
};


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4612:
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,635,548], () => (__webpack_exec__(7980)));
module.exports = __webpack_exports__;

})();