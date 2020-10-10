const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const loadJavascript = () => {
//   return {
//     mode : process.env.MODE || "development",
//     entry: {
//         index : "./src/index.js",
//         print : "./src/print.js"
//     },
//     output: {
//       filename: "[name].bundle.js",
//       path: path.resolve(__dirname, "dist"),
//       publicPath : "/",
//     },
//     devtool : "inline-source-map",
//     devServer : {
//         contentBase : "./dist"
//     },
//     module: {
//       rules: [
//         {
//           test: /\.css$/i,
//           use: [
//             {
//               loader: "style-loader",
//             },
//             {
//               loader: "css-loader",
//             },
//             {
//                 loader: 'postcss-loader',
//                 options: {
//                   postcssOptions: {
//                     ident: 'postcss',
//                     plugins: [
//                       require('tailwindcss'),
//                       require('autoprefixer'),
//                     ],
//                   },
//                 }
//               },
//           ],
//         },
//         {
//             test : /\.(png|svg|jpg|gif)$/,
//             use : [
//                 "file-loader"
//             ]
//         }
//       ],
//     },
//     plugins : [
//         new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
//         new HtmlWebpackPlugin({
//             title : "Assets Management",
//             template : "public/index.html"
//         })
//     ]
//   };
// };

// module.exports = [loadJavascript()];

module.exports = {
    mode : process.env.MODE || "development",
    entry: {
        index : "./src/index.js",
        print : "./src/print.js"
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      publicPath : "/",
    },
    devtool : "inline-source-map",
    devServer : {
        contentBase : "./dist"
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
            },
            {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    ident: 'postcss',
                    plugins: [
                      require('tailwindcss'),
                      require('autoprefixer'),
                    ],
                  },
                }
              },
          ],
        },
        {
            test : /\.(png|svg|jpg|gif)$/,
            use : [
                "file-loader"
            ]
        }
      ],
    },
    plugins : [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            title : "Assets Management",
            template : "public/index.html"
        })
    ]
  };