/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/wzyblog/public/2020/02/29/hello-world/index.html","1a23e76a0a60271321fbbb66120b73a9"],["D:/wzyblog/public/2020/03/05/stm32f10X/index.html","e75eec2cbc19d1a639258dbf8d12dd57"],["D:/wzyblog/public/2020/03/20/blog之旅/10.png","2e40327b4b40029b40df70a58267cc83"],["D:/wzyblog/public/2020/03/20/blog之旅/11.png","a5b177151b09a6832ec710304adb17a1"],["D:/wzyblog/public/2020/03/20/blog之旅/12.png","d540b79b9a1d594ad5232599941492a9"],["D:/wzyblog/public/2020/03/20/blog之旅/13.png","66e0442515d601339452ec8640ea8e66"],["D:/wzyblog/public/2020/03/20/blog之旅/14.png","c84055538f0919ba12c44773a75c271d"],["D:/wzyblog/public/2020/03/20/blog之旅/15.png","cef2399a6eb8be6f57a231c99715b616"],["D:/wzyblog/public/2020/03/20/blog之旅/16.png","3af04bdf0be033c176313af31ab8a385"],["D:/wzyblog/public/2020/03/20/blog之旅/2.png","07a4b57897ed320251d7565c4bbb1c11"],["D:/wzyblog/public/2020/03/20/blog之旅/3.png","249f435345c1838d5f84eee8c2b3a96c"],["D:/wzyblog/public/2020/03/20/blog之旅/4.png","f412cae4cf07ef6fcef80ac9b08cacda"],["D:/wzyblog/public/2020/03/20/blog之旅/5.png","bd21b69d66f1c308c6a2565a647b751e"],["D:/wzyblog/public/2020/03/20/blog之旅/6.png","2f70d8a5914221ad37db02c43b1b28cb"],["D:/wzyblog/public/2020/03/20/blog之旅/7.png","b68706c825977cdea1350d937af3a604"],["D:/wzyblog/public/2020/03/20/blog之旅/8.png","ed82ab2f42e9e05a34cd3372d8e2d3df"],["D:/wzyblog/public/2020/03/20/blog之旅/9.png","8687f1ba8f3df354ba6f15fc96e0712d"],["D:/wzyblog/public/2020/03/20/blog之旅/index.html","6dca28ab5252e289fc0ca387514bfb36"],["D:/wzyblog/public/2020/03/28/傅里叶变换推导/1.png","686e0bf47849fc7f1f08cd34902e3e93"],["D:/wzyblog/public/2020/03/28/傅里叶变换推导/2.png","22d61225c389aa3f9ba1c5e3885ac4d4"],["D:/wzyblog/public/2020/03/28/傅里叶变换推导/3.png","3676892ab9e45c6ef334b75a5aa92eed"],["D:/wzyblog/public/2020/03/28/傅里叶变换推导/4.png","26110f0db5c5b73b1636f62ec43901f1"],["D:/wzyblog/public/2020/03/28/傅里叶变换推导/5.png","2a91c376a6596c51dbe9be89d885995e"],["D:/wzyblog/public/2020/03/28/傅里叶变换推导/6.png","fa3c7f42e85b468147f796f10a5283fc"],["D:/wzyblog/public/2020/03/28/傅里叶变换推导/index.html","347ad8353525e788be5fcd75349de695"],["D:/wzyblog/public/archives/2020/02/index.html","f579baebf8b4b5f3d6328462cd11be28"],["D:/wzyblog/public/archives/2020/03/index.html","757ffbb991ac6e7101dd681169fe2073"],["D:/wzyblog/public/archives/2020/index.html","7ea0971ad38311591619c03e9bd23788"],["D:/wzyblog/public/archives/index.html","57ebb9f105ee500d185245d2480fe486"],["D:/wzyblog/public/categories/index.html","ec58ddbeb3fc3059344fcf0364be21ef"],["D:/wzyblog/public/css/index.css","274a5bdff1fdf9c2ca42756a03fae94a"],["D:/wzyblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/wzyblog/public/images/1.png","709dd1a491db375b6bb758cf4e08fc18"],["D:/wzyblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/wzyblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/wzyblog/public/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["D:/wzyblog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/wzyblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/wzyblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/wzyblog/public/img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["D:/wzyblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/wzyblog/public/img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["D:/wzyblog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/wzyblog/public/img/self.jpg","0224aef35b051fe40f81754b0e8716b1"],["D:/wzyblog/public/index.html","23ec1dab2c7eb793187d8095fa218040"],["D:/wzyblog/public/js/main.js","0cd0cf0fdb710ba9b7d96caa04c2dfaf"],["D:/wzyblog/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["D:/wzyblog/public/js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["D:/wzyblog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/wzyblog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/wzyblog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/wzyblog/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["D:/wzyblog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/wzyblog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/wzyblog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/wzyblog/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["D:/wzyblog/public/js/utils.js","23b2d649db443d85eb9f99bd0aea196b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







