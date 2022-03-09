"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./sanity.js
var sanity = __webpack_require__(3774);
// EXTERNAL MODULE: ./components/Header.jsx
var Header = __webpack_require__(1932);
;// CONCATENATED MODULE: external "next"
const external_next_namespaceObject = require("next");
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "@portabletext/react"
const react_namespaceObject = require("@portabletext/react");
// EXTERNAL MODULE: ./components/Footer.jsx
var Footer = __webpack_require__(6124);
;// CONCATENATED MODULE: ./pages/blog/[slug].jsx







const ptComponents = {
    types: {
        image: ({ value  })=>{
            if (!value?.asset?._ref) {
                return null;
            }
            return(/*#__PURE__*/ jsx_runtime_.jsx("img", {
                alt: value.alt || ' ',
                loading: "lazy",
                src: (0,sanity/* urlFor */.uH)(value)
            }));
        }
    },
    block: {
        h1: ({ children  })=>/*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "card-title-blog",
                children: children
            })
        ,
        h2: ({ children  })=>/*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "card-heading-blog",
                children: children
            })
        ,
        h3: ({ children  })=>/*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "card-text-blog",
                children: children
            })
        ,
        h4: ({ children  })=>/*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "card-text-blog",
                children: children
            })
        ,
        normal: ({ children  })=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "card-text-blog",
                children: children
            })
    },
    marks: {
        link: ({ value , children  })=>{
            const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
            return(/*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: value?.href,
                target: target,
                rel: target === '_blank' && 'noindex nofollow',
                className: "card-link",
                children: children
            }));
        }
    },
    list: {
        bullet: ({ children  })=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "card-text-blog",
                children: children
            })
    }
};
function Post({ post  }) {
    console.log(post);
    const date = new Date(post.publishedAt);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "eProjects"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "https://code.jquery.com/jquery-3.2.1.slim.min.js",
                        integrity: "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN",
                        crossorigin: "anonymous"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",
                        integrity: "sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q",
                        crossorigin: "anonymous"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
                        integrity: "sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl",
                        crossorigin: "anonymous"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossorigin: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Domine&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Inter&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "https://kit.fontawesome.com/479dffc7d0.js"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                id: "blog",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "card-blog card",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: "card-subtitle",
                                children: `${date.toLocaleDateString()} ${post.readingTime}`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "card-text-blog",
                                children: `${post.description}`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: (0,sanity/* urlFor */.uH)(post.mainImage).url(),
                                alt: "Card image cap"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.PortableText, {
                                dataset: "production",
                                projectId: "3fqgc63j",
                                value: post.body,
                                components: ptComponents
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    }));
}
/* harmony default export */ const _slug_ = (Post);
const getStaticPaths = async ()=>{
    const query = `*[_type == "post"] {
        _id,
        slug {
        current
      }
      }`;
    const posts = await sanity/* sanityClient.fetch */.i3.fetch(query);
    const paths = posts.map((post)=>({
            params: {
                slug: post.slug.current
            }
        })
    );
    return {
        paths,
        fallback: 'blocking'
    };
};
const getStaticProps = async ({ params  })=>{
    const query = `*[_type == "post" && slug.current == $slug][0] {
        _id, 
        publishedAt,
        title,
        author -> {
          name,
          image
        },
        description,
        body,
        readingTime,
        mainImage
      } `;
    const post = await sanity/* sanityClient.fetch */.i3.fetch(query, {
        slug: params?.slug
    });
    if (!post) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            post
        },
        revalidate: 60
    };
};


/***/ }),

/***/ 5368:
/***/ ((module) => {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ 6466:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 1791:
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ 5879:
/***/ ((module) => {

module.exports = require("next-sanity");

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

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,748,774], () => (__webpack_exec__(568)));
module.exports = __webpack_exports__;

})();