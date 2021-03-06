/**
 * @license
 * Copyright 2017 Google Inc. All rights reserved.
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
'use strict';

/**
 * Expected Lighthouse audit values for byte efficiency tests
 */
module.exports = [
  {
    initialUrl: 'http://localhost:10200/byte-efficiency/tester.html',
    url: 'http://localhost:10200/byte-efficiency/tester.html',
    audits: {
      // TODO: re-enable once CSS protocol has stabilized
      // 'unused-css-rules': {
      //   score: false,
      //   extendedInfo: {
      //     value: {
      //       results: {
      //         length: 2
      //       }
      //     }
      //   }
      // },
      'offscreen-images': {
        // TODO: re-enable score assertions when we have more flexible assertions like < 100
        // score: 65,
        extendedInfo: {
          value: {
            results: {
              length: 3
            }
          }
        }
      },
      'uses-webp-images': {
        // score: 65,
        extendedInfo: {
          value: {
            results: {
              length: 4
            }
          }
        }
      },
      'uses-optimized-images': {
        // score: 65,
        extendedInfo: {
          value: {
            results: {
              length: 1
            }
          }
        }
      },
      'uses-responsive-images': {
        // score: 90,
        extendedInfo: {
          value: {
            results: {
              length: 3
            }
          }
        }
      }
    }
  },
];
