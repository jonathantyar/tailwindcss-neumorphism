const plugin = require('tailwindcss/plugin')

module.exports = function () {
    function({e, addUtilities}) {
        const newUtitlities = {
          '.neumorphism-gray-50-flat-sm': {
          boxShadow : '7px 7px 14px #aeafb0 , inset 0 0 0 #aeafb0 ,\
          -7px -7px 14px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-gray-50-flat-md': {
          boxShadow : '14px 14px 28px #aeafb0 , inset 0 0 0 #aeafb0 ,\
          -14px -14px 28px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-gray-50-flat-lg': {
          boxShadow : '28px 28px 56px #aeafb0 , inset 0 0 0 #aeafb0 ,\
          -28px -28px 56px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-gray-50-flat-invert-sm': {
          boxShadow : '0 0 0 #aeafb0 , inset 7px 7px 14px #aeafb0 ,\
          0 0 0 #ffffff, inset -7px -7px 14px #ffffff'
          },
          '.neumorphism-gray-50-flat-invert-md': {
          boxShadow : '0 0 0 #aeafb0 , inset 14px 14px 28px #aeafb0 ,\
          0 0 0 #ffffff, inset -14px -14px 28px #ffffff'
          },
          '.neumorphism-gray-50-flat-invert-lg': {
          boxShadow : '0 0 0 #aeafb0 , inset 28px 28px 56px #aeafb0 ,\
          0 0 0 #ffffff, inset -28px -28px 56px #ffffff'
          },
          '.neumorphism-gray-100-flat-sm': {
          boxShadow : '7px 7px 14px #aaabac , inset 0 0 0 #aaabac ,\
          -7px -7px 14px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-gray-100-flat-md': {
          boxShadow : '14px 14px 28px #aaabac , inset 0 0 0 #aaabac ,\
          -14px -14px 28px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-gray-100-flat-lg': {
          boxShadow : '28px 28px 56px #aaabac , inset 0 0 0 #aaabac ,\
          -28px -28px 56px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-gray-100-flat-invert-sm': {
          boxShadow : '0 0 0 #aaabac , inset 7px 7px 14px #aaabac ,\
          0 0 0 #ffffff, inset -7px -7px 14px #ffffff'
          },
          '.neumorphism-gray-100-flat-invert-md': {
          boxShadow : '0 0 0 #aaabac , inset 14px 14px 28px #aaabac ,\
          0 0 0 #ffffff, inset -14px -14px 28px #ffffff'
          },
          '.neumorphism-gray-100-flat-invert-lg': {
          boxShadow : '0 0 0 #aaabac , inset 28px 28px 56px #aaabac ,\
          0 0 0 #ffffff, inset -28px -28px 56px #ffffff'
          },
          '.neumorphism-gray-200-flat-sm': {
          boxShadow : '7px 7px 14px #a0a2a5 , inset 0 0 0 #a0a2a5 ,\
          -7px -7px 14px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-gray-200-flat-md': {
          boxShadow : '14px 14px 28px #a0a2a5 , inset 0 0 0 #a0a2a5 ,\
          -14px -14px 28px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-gray-200-flat-lg': {
          boxShadow : '28px 28px 56px #a0a2a5 , inset 0 0 0 #a0a2a5 ,\
          -28px -28px 56px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-gray-200-flat-invert-sm': {
          boxShadow : '0 0 0 #a0a2a5 , inset 7px 7px 14px #a0a2a5 ,\
          0 0 0 #ffffff, inset -7px -7px 14px #ffffff'
          },
          '.neumorphism-gray-200-flat-invert-md': {
          boxShadow : '0 0 0 #a0a2a5 , inset 14px 14px 28px #a0a2a5 ,\
          0 0 0 #ffffff, inset -14px -14px 28px #ffffff'
          },
          '.neumorphism-gray-200-flat-invert-lg': {
          boxShadow : '0 0 0 #a0a2a5 , inset 28px 28px 56px #a0a2a5 ,\
          0 0 0 #ffffff, inset -28px -28px 56px #ffffff'
          },
          '.neumorphism-gray-300-flat-sm': {
          boxShadow : '7px 7px 14px #929599 , inset 0 0 0 #929599 ,\
          -7px -7px 14px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-gray-300-flat-md': {
          boxShadow : '14px 14px 28px #929599 , inset 0 0 0 #929599 ,\
          -14px -14px 28px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-gray-300-flat-lg': {
          boxShadow : '28px 28px 56px #929599 , inset 0 0 0 #929599 ,\
          -28px -28px 56px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-gray-300-flat-invert-sm': {
          boxShadow : '0 0 0 #929599 , inset 7px 7px 14px #929599 ,\
          0 0 0 #ffffff, inset -7px -7px 14px #ffffff'
          },
          '.neumorphism-gray-300-flat-invert-md': {
          boxShadow : '0 0 0 #929599 , inset 14px 14px 28px #929599 ,\
          0 0 0 #ffffff, inset -14px -14px 28px #ffffff'
          },
          '.neumorphism-gray-300-flat-invert-lg': {
          boxShadow : '0 0 0 #929599 , inset 28px 28px 56px #929599 ,\
          0 0 0 #ffffff, inset -28px -28px 56px #ffffff'
          },
          '.neumorphism-gray-400-flat-sm': {
          boxShadow : '7px 7px 14px #6d727b , inset 0 0 0 #6d727b ,\
          -7px -7px 14px #cbd4e4, inset 0 0 0 #cbd4e4'
          },
          '.neumorphism-gray-400-flat-md': {
          boxShadow : '14px 14px 28px #6d727b , inset 0 0 0 #6d727b ,\
          -14px -14px 28px #cbd4e4, inset 0 0 0 #cbd4e4'
          },
          '.neumorphism-gray-400-flat-lg': {
          boxShadow : '28px 28px 56px #6d727b , inset 0 0 0 #6d727b ,\
          -28px -28px 56px #cbd4e4, inset 0 0 0 #cbd4e4'
          },
          '.neumorphism-gray-400-flat-invert-sm': {
          boxShadow : '0 0 0 #6d727b , inset 7px 7px 14px #6d727b ,\
          0 0 0 #cbd4e4, inset -7px -7px 14px #cbd4e4'
          },
          '.neumorphism-gray-400-flat-invert-md': {
          boxShadow : '0 0 0 #6d727b , inset 14px 14px 28px #6d727b ,\
          0 0 0 #cbd4e4, inset -14px -14px 28px #cbd4e4'
          },
          '.neumorphism-gray-400-flat-invert-lg': {
          boxShadow : '0 0 0 #6d727b , inset 28px 28px 56px #6d727b ,\
          0 0 0 #cbd4e4, inset -28px -28px 56px #cbd4e4'
          },
          '.neumorphism-gray-500-flat-sm': {
          boxShadow : '7px 7px 14px #4b505a , inset 0 0 0 #4b505a ,\
          -7px -7px 14px #8b94a6, inset 0 0 0 #8b94a6'
          },
          '.neumorphism-gray-500-flat-md': {
          boxShadow : '14px 14px 28px #4b505a , inset 0 0 0 #4b505a ,\
          -14px -14px 28px #8b94a6, inset 0 0 0 #8b94a6'
          },
          '.neumorphism-gray-500-flat-lg': {
          boxShadow : '28px 28px 56px #4b505a , inset 0 0 0 #4b505a ,\
          -28px -28px 56px #8b94a6, inset 0 0 0 #8b94a6'
          },
          '.neumorphism-gray-500-flat-invert-sm': {
          boxShadow : '0 0 0 #4b505a , inset 7px 7px 14px #4b505a ,\
          0 0 0 #8b94a6, inset -7px -7px 14px #8b94a6'
          },
          '.neumorphism-gray-500-flat-invert-md': {
          boxShadow : '0 0 0 #4b505a , inset 14px 14px 28px #4b505a ,\
          0 0 0 #8b94a6, inset -14px -14px 28px #8b94a6'
          },
          '.neumorphism-gray-500-flat-invert-lg': {
          boxShadow : '0 0 0 #4b505a , inset 28px 28px 56px #4b505a ,\
          0 0 0 #8b94a6, inset -28px -28px 56px #8b94a6'
          },
          '.neumorphism-gray-600-flat-sm': {
          boxShadow : '7px 7px 14px #353c45 , inset 0 0 0 #353c45 ,\
          -7px -7px 14px #626f81, inset 0 0 0 #626f81'
          },
          '.neumorphism-gray-600-flat-md': {
          boxShadow : '14px 14px 28px #353c45 , inset 0 0 0 #353c45 ,\
          -14px -14px 28px #626f81, inset 0 0 0 #626f81'
          },
          '.neumorphism-gray-600-flat-lg': {
          boxShadow : '28px 28px 56px #353c45 , inset 0 0 0 #353c45 ,\
          -28px -28px 56px #626f81, inset 0 0 0 #626f81'
          },
          '.neumorphism-gray-600-flat-invert-sm': {
          boxShadow : '0 0 0 #353c45 , inset 7px 7px 14px #353c45 ,\
          0 0 0 #626f81, inset -7px -7px 14px #626f81'
          },
          '.neumorphism-gray-600-flat-invert-md': {
          boxShadow : '0 0 0 #353c45 , inset 14px 14px 28px #353c45 ,\
          0 0 0 #626f81, inset -14px -14px 28px #626f81'
          },
          '.neumorphism-gray-600-flat-invert-lg': {
          boxShadow : '0 0 0 #353c45 , inset 28px 28px 56px #353c45 ,\
          0 0 0 #626f81, inset -28px -28px 56px #626f81'
          },
          '.neumorphism-gray-700-flat-sm': {
          boxShadow : '7px 7px 14px #272e39 , inset 0 0 0 #272e39 ,\
          -7px -7px 14px #485569, inset 0 0 0 #485569'
          },
          '.neumorphism-gray-700-flat-md': {
          boxShadow : '14px 14px 28px #272e39 , inset 0 0 0 #272e39 ,\
          -14px -14px 28px #485569, inset 0 0 0 #485569'
          },
          '.neumorphism-gray-700-flat-lg': {
          boxShadow : '28px 28px 56px #272e39 , inset 0 0 0 #272e39 ,\
          -28px -28px 56px #485569, inset 0 0 0 #485569'
          },
          '.neumorphism-gray-700-flat-invert-sm': {
          boxShadow : '0 0 0 #272e39 , inset 7px 7px 14px #272e39 ,\
          0 0 0 #485569, inset -7px -7px 14px #485569'
          },
          '.neumorphism-gray-700-flat-invert-md': {
          boxShadow : '0 0 0 #272e39 , inset 14px 14px 28px #272e39 ,\
          0 0 0 #485569, inset -14px -14px 28px #485569'
          },
          '.neumorphism-gray-700-flat-invert-lg': {
          boxShadow : '0 0 0 #272e39 , inset 28px 28px 56px #272e39 ,\
          0 0 0 #485569, inset -28px -28px 56px #485569'
          },
          '.neumorphism-gray-800-flat-sm': {
          boxShadow : '7px 7px 14px #161d27 , inset 0 0 0 #161d27 ,\
          -7px -7px 14px #283548, inset 0 0 0 #283548'
          },
          '.neumorphism-gray-800-flat-md': {
          boxShadow : '14px 14px 28px #161d27 , inset 0 0 0 #161d27 ,\
          -14px -14px 28px #283548, inset 0 0 0 #283548'
          },
          '.neumorphism-gray-800-flat-lg': {
          boxShadow : '28px 28px 56px #161d27 , inset 0 0 0 #161d27 ,\
          -28px -28px 56px #283548, inset 0 0 0 #283548'
          },
          '.neumorphism-gray-800-flat-invert-sm': {
          boxShadow : '0 0 0 #161d27 , inset 7px 7px 14px #161d27 ,\
          0 0 0 #283548, inset -7px -7px 14px #283548'
          },
          '.neumorphism-gray-800-flat-invert-md': {
          boxShadow : '0 0 0 #161d27 , inset 14px 14px 28px #161d27 ,\
          0 0 0 #283548, inset -14px -14px 28px #283548'
          },
          '.neumorphism-gray-800-flat-invert-lg': {
          boxShadow : '0 0 0 #161d27 , inset 28px 28px 56px #161d27 ,\
          0 0 0 #283548, inset -28px -28px 56px #283548'
          },
          '.neumorphism-gray-900-flat-sm': {
          boxShadow : '7px 7px 14px #0c111b , inset 0 0 0 #0c111b ,\
          -7px -7px 14px #161f33, inset 0 0 0 #161f33'
          },
          '.neumorphism-gray-900-flat-md': {
          boxShadow : '14px 14px 28px #0c111b , inset 0 0 0 #0c111b ,\
          -14px -14px 28px #161f33, inset 0 0 0 #161f33'
          },
          '.neumorphism-gray-900-flat-lg': {
          boxShadow : '28px 28px 56px #0c111b , inset 0 0 0 #0c111b ,\
          -28px -28px 56px #161f33, inset 0 0 0 #161f33'
          },
          '.neumorphism-gray-900-flat-invert-sm': {
          boxShadow : '0 0 0 #0c111b , inset 7px 7px 14px #0c111b ,\
          0 0 0 #161f33, inset -7px -7px 14px #161f33'
          },
          '.neumorphism-gray-900-flat-invert-md': {
          boxShadow : '0 0 0 #0c111b , inset 14px 14px 28px #0c111b ,\
          0 0 0 #161f33, inset -14px -14px 28px #161f33'
          },
          '.neumorphism-gray-900-flat-invert-lg': {
          boxShadow : '0 0 0 #0c111b , inset 28px 28px 56px #0c111b ,\
          0 0 0 #161f33, inset -28px -28px 56px #161f33'
          },
          '.neumorphism-red-50-flat-sm': {
          boxShadow : '7px 7px 14px #b2a9a9 , inset 0 0 0 #b2a9a9 ,\
          -7px -7px 14px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-red-50-flat-md': {
          boxShadow : '14px 14px 28px #b2a9a9 , inset 0 0 0 #b2a9a9 ,\
          -14px -14px 28px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-red-50-flat-lg': {
          boxShadow : '28px 28px 56px #b2a9a9 , inset 0 0 0 #b2a9a9 ,\
          -28px -28px 56px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-red-50-flat-invert-sm': {
          boxShadow : '0 0 0 #b2a9a9 , inset 7px 7px 14px #b2a9a9 ,\
          0 0 0 #ffffff, inset -7px -7px 14px #ffffff'
          },
          '.neumorphism-red-50-flat-invert-md': {
          boxShadow : '0 0 0 #b2a9a9 , inset 14px 14px 28px #b2a9a9 ,\
          0 0 0 #ffffff, inset -14px -14px 28px #ffffff'
          },
          '.neumorphism-red-50-flat-invert-lg': {
          boxShadow : '0 0 0 #b2a9a9 , inset 28px 28px 56px #b2a9a9 ,\
          0 0 0 #ffffff, inset -28px -28px 56px #ffffff'
          },
          '.neumorphism-red-100-flat-sm': {
          boxShadow : '7px 7px 14px #b29e9e , inset 0 0 0 #b29e9e ,\
          -7px -7px 14px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-red-100-flat-md': {
          boxShadow : '14px 14px 28px #b29e9e , inset 0 0 0 #b29e9e ,\
          -14px -14px 28px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-red-100-flat-lg': {
          boxShadow : '28px 28px 56px #b29e9e , inset 0 0 0 #b29e9e ,\
          -28px -28px 56px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-red-100-flat-invert-sm': {
          boxShadow : '0 0 0 #b29e9e , inset 7px 7px 14px #b29e9e ,\
          0 0 0 #ffffff, inset -7px -7px 14px #ffffff'
          },
          '.neumorphism-red-100-flat-invert-md': {
          boxShadow : '0 0 0 #b29e9e , inset 14px 14px 28px #b29e9e ,\
          0 0 0 #ffffff, inset -14px -14px 28px #ffffff'
          },
          '.neumorphism-red-100-flat-invert-lg': {
          boxShadow : '0 0 0 #b29e9e , inset 28px 28px 56px #b29e9e ,\
          0 0 0 #ffffff, inset -28px -28px 56px #ffffff'
          },
          '.neumorphism-red-200-flat-sm': {
          boxShadow : '7px 7px 14px #b28d8d , inset 0 0 0 #b28d8d ,\
          -7px -7px 14px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-red-200-flat-md': {
          boxShadow : '14px 14px 28px #b28d8d , inset 0 0 0 #b28d8d ,\
          -14px -14px 28px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-red-200-flat-lg': {
          boxShadow : '28px 28px 56px #b28d8d , inset 0 0 0 #b28d8d ,\
          -28px -28px 56px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-red-200-flat-invert-sm': {
          boxShadow : '0 0 0 #b28d8d , inset 7px 7px 14px #b28d8d ,\
          0 0 0 #ffffff, inset -7px -7px 14px #ffffff'
          },
          '.neumorphism-red-200-flat-invert-md': {
          boxShadow : '0 0 0 #b28d8d , inset 14px 14px 28px #b28d8d ,\
          0 0 0 #ffffff, inset -14px -14px 28px #ffffff'
          },
          '.neumorphism-red-200-flat-invert-lg': {
          boxShadow : '0 0 0 #b28d8d , inset 28px 28px 56px #b28d8d ,\
          0 0 0 #ffffff, inset -28px -28px 56px #ffffff'
          },
          '.neumorphism-red-300-flat-sm': {
          boxShadow : '7px 7px 14px #b07474 , inset 0 0 0 #b07474 ,\
          -7px -7px 14px #ffd7d7, inset 0 0 0 #ffd7d7'
          },
          '.neumorphism-red-300-flat-md': {
          boxShadow : '14px 14px 28px #b07474 , inset 0 0 0 #b07474 ,\
          -14px -14px 28px #ffd7d7, inset 0 0 0 #ffd7d7'
          },
          '.neumorphism-red-300-flat-lg': {
          boxShadow : '28px 28px 56px #b07474 , inset 0 0 0 #b07474 ,\
          -28px -28px 56px #ffd7d7, inset 0 0 0 #ffd7d7'
          },
          '.neumorphism-red-300-flat-invert-sm': {
          boxShadow : '0 0 0 #b07474 , inset 7px 7px 14px #b07474 ,\
          0 0 0 #ffd7d7, inset -7px -7px 14px #ffd7d7'
          },
          '.neumorphism-red-300-flat-invert-md': {
          boxShadow : '0 0 0 #b07474 , inset 14px 14px 28px #b07474 ,\
          0 0 0 #ffd7d7, inset -14px -14px 28px #ffd7d7'
          },
          '.neumorphism-red-300-flat-invert-lg': {
          boxShadow : '0 0 0 #b07474 , inset 28px 28px 56px #b07474 ,\
          0 0 0 #ffd7d7, inset -28px -28px 56px #ffd7d7'
          },
          '.neumorphism-red-400-flat-sm': {
          boxShadow : '7px 7px 14px #ae4f4f , inset 0 0 0 #ae4f4f ,\
          -7px -7px 14px #ff9393, inset 0 0 0 #ff9393'
          },
          '.neumorphism-red-400-flat-md': {
          boxShadow : '14px 14px 28px #ae4f4f , inset 0 0 0 #ae4f4f ,\
          -14px -14px 28px #ff9393, inset 0 0 0 #ff9393'
          },
          '.neumorphism-red-400-flat-lg': {
          boxShadow : '28px 28px 56px #ae4f4f , inset 0 0 0 #ae4f4f ,\
          -28px -28px 56px #ff9393, inset 0 0 0 #ff9393'
          },
          '.neumorphism-red-400-flat-invert-sm': {
          boxShadow : '0 0 0 #ae4f4f , inset 7px 7px 14px #ae4f4f ,\
          0 0 0 #ff9393, inset -7px -7px 14px #ff9393'
          },
          '.neumorphism-red-400-flat-invert-md': {
          boxShadow : '0 0 0 #ae4f4f , inset 14px 14px 28px #ae4f4f ,\
          0 0 0 #ff9393, inset -14px -14px 28px #ff9393'
          },
          '.neumorphism-red-400-flat-invert-lg': {
          boxShadow : '0 0 0 #ae4f4f , inset 28px 28px 56px #ae4f4f ,\
          0 0 0 #ff9393, inset -28px -28px 56px #ff9393'
          },
          '.neumorphism-red-500-flat-sm': {
          boxShadow : '7px 7px 14px #a73030 , inset 0 0 0 #a73030 ,\
          -7px -7px 14px #ff5858, inset 0 0 0 #ff5858'
          },
          '.neumorphism-red-500-flat-md': {
          boxShadow : '14px 14px 28px #a73030 , inset 0 0 0 #a73030 ,\
          -14px -14px 28px #ff5858, inset 0 0 0 #ff5858'
          },
          '.neumorphism-red-500-flat-lg': {
          boxShadow : '28px 28px 56px #a73030 , inset 0 0 0 #a73030 ,\
          -28px -28px 56px #ff5858, inset 0 0 0 #ff5858'
          },
          '.neumorphism-red-500-flat-invert-sm': {
          boxShadow : '0 0 0 #a73030 , inset 7px 7px 14px #a73030 ,\
          0 0 0 #ff5858, inset -7px -7px 14px #ff5858'
          },
          '.neumorphism-red-500-flat-invert-md': {
          boxShadow : '0 0 0 #a73030 , inset 14px 14px 28px #a73030 ,\
          0 0 0 #ff5858, inset -14px -14px 28px #ff5858'
          },
          '.neumorphism-red-500-flat-invert-lg': {
          boxShadow : '0 0 0 #a73030 , inset 28px 28px 56px #a73030 ,\
          0 0 0 #ff5858, inset -28px -28px 56px #ff5858'
          },
          '.neumorphism-red-600-flat-sm': {
          boxShadow : '7px 7px 14px #9a1b1b , inset 0 0 0 #9a1b1b ,\
          -7px -7px 14px #ff3131, inset 0 0 0 #ff3131'
          },
          '.neumorphism-red-600-flat-md': {
          boxShadow : '14px 14px 28px #9a1b1b , inset 0 0 0 #9a1b1b ,\
          -14px -14px 28px #ff3131, inset 0 0 0 #ff3131'
          },
          '.neumorphism-red-600-flat-lg': {
          boxShadow : '28px 28px 56px #9a1b1b , inset 0 0 0 #9a1b1b ,\
          -28px -28px 56px #ff3131, inset 0 0 0 #ff3131'
          },
          '.neumorphism-red-600-flat-invert-sm': {
          boxShadow : '0 0 0 #9a1b1b , inset 7px 7px 14px #9a1b1b ,\
          0 0 0 #ff3131, inset -7px -7px 14px #ff3131'
          },
          '.neumorphism-red-600-flat-invert-md': {
          boxShadow : '0 0 0 #9a1b1b , inset 14px 14px 28px #9a1b1b ,\
          0 0 0 #ff3131, inset -14px -14px 28px #ff3131'
          },
          '.neumorphism-red-600-flat-invert-lg': {
          boxShadow : '0 0 0 #9a1b1b , inset 28px 28px 56px #9a1b1b ,\
          0 0 0 #ff3131, inset -28px -28px 56px #ff3131'
          },
          '.neumorphism-red-700-flat-sm': {
          boxShadow : '7px 7px 14px #821414 , inset 0 0 0 #821414 ,\
          -7px -7px 14px #f12424, inset 0 0 0 #f12424'
          },
          '.neumorphism-red-700-flat-md': {
          boxShadow : '14px 14px 28px #821414 , inset 0 0 0 #821414 ,\
          -14px -14px 28px #f12424, inset 0 0 0 #f12424'
          },
          '.neumorphism-red-700-flat-lg': {
          boxShadow : '28px 28px 56px #821414 , inset 0 0 0 #821414 ,\
          -28px -28px 56px #f12424, inset 0 0 0 #f12424'
          },
          '.neumorphism-red-700-flat-invert-sm': {
          boxShadow : '0 0 0 #821414 , inset 7px 7px 14px #821414 ,\
          0 0 0 #f12424, inset -7px -7px 14px #f12424'
          },
          '.neumorphism-red-700-flat-invert-md': {
          boxShadow : '0 0 0 #821414 , inset 14px 14px 28px #821414 ,\
          0 0 0 #f12424, inset -14px -14px 28px #f12424'
          },
          '.neumorphism-red-700-flat-invert-lg': {
          boxShadow : '0 0 0 #821414 , inset 28px 28px 56px #821414 ,\
          0 0 0 #f12424, inset -28px -28px 56px #f12424'
          },
          '.neumorphism-red-800-flat-sm': {
          boxShadow : '7px 7px 14px #6b1313 , inset 0 0 0 #6b1313 ,\
          -7px -7px 14px #c72323, inset 0 0 0 #c72323'
          },
          '.neumorphism-red-800-flat-md': {
          boxShadow : '14px 14px 28px #6b1313 , inset 0 0 0 #6b1313 ,\
          -14px -14px 28px #c72323, inset 0 0 0 #c72323'
          },
          '.neumorphism-red-800-flat-lg': {
          boxShadow : '28px 28px 56px #6b1313 , inset 0 0 0 #6b1313 ,\
          -28px -28px 56px #c72323, inset 0 0 0 #c72323'
          },
          '.neumorphism-red-800-flat-invert-sm': {
          boxShadow : '0 0 0 #6b1313 , inset 7px 7px 14px #6b1313 ,\
          0 0 0 #c72323, inset -7px -7px 14px #c72323'
          },
          '.neumorphism-red-800-flat-invert-md': {
          boxShadow : '0 0 0 #6b1313 , inset 14px 14px 28px #6b1313 ,\
          0 0 0 #c72323, inset -14px -14px 28px #c72323'
          },
          '.neumorphism-red-800-flat-invert-lg': {
          boxShadow : '0 0 0 #6b1313 , inset 28px 28px 56px #6b1313 ,\
          0 0 0 #c72323, inset -28px -28px 56px #c72323'
          },
          '.neumorphism-red-900-flat-sm': {
          boxShadow : '7px 7px 14px #591414 , inset 0 0 0 #591414 ,\
          -7px -7px 14px #a52626, inset 0 0 0 #a52626'
          },
          '.neumorphism-red-900-flat-md': {
          boxShadow : '14px 14px 28px #591414 , inset 0 0 0 #591414 ,\
          -14px -14px 28px #a52626, inset 0 0 0 #a52626'
          },
          '.neumorphism-red-900-flat-lg': {
          boxShadow : '28px 28px 56px #591414 , inset 0 0 0 #591414 ,\
          -28px -28px 56px #a52626, inset 0 0 0 #a52626'
          },
          '.neumorphism-red-900-flat-invert-sm': {
          boxShadow : '0 0 0 #591414 , inset 7px 7px 14px #591414 ,\
          0 0 0 #a52626, inset -7px -7px 14px #a52626'
          },
          '.neumorphism-red-900-flat-invert-md': {
          boxShadow : '0 0 0 #591414 , inset 14px 14px 28px #591414 ,\
          0 0 0 #a52626, inset -14px -14px 28px #a52626'
          },
          '.neumorphism-red-900-flat-invert-lg': {
          boxShadow : '0 0 0 #591414 , inset 28px 28px 56px #591414 ,\
          0 0 0 #a52626, inset -28px -28px 56px #a52626'
          },
          '.neumorphism-yellow-50-flat-sm': {
          boxShadow : '7px 7px 14px #b3b0a5 , inset 0 0 0 #b3b0a5 ,\
          -7px -7px 14px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-yellow-50-flat-md': {
          boxShadow : '14px 14px 28px #b3b0a5 , inset 0 0 0 #b3b0a5 ,\
          -14px -14px 28px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-yellow-50-flat-lg': {
          boxShadow : '28px 28px 56px #b3b0a5 , inset 0 0 0 #b3b0a5 ,\
          -28px -28px 56px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-yellow-50-flat-invert-sm': {
          boxShadow : '0 0 0 #b3b0a5 , inset 7px 7px 14px #b3b0a5 ,\
          0 0 0 #ffffff, inset -7px -7px 14px #ffffff'
          },
          '.neumorphism-yellow-50-flat-invert-md': {
          boxShadow : '0 0 0 #b3b0a5 , inset 14px 14px 28px #b3b0a5 ,\
          0 0 0 #ffffff, inset -14px -14px 28px #ffffff'
          },
          '.neumorphism-yellow-50-flat-invert-lg': {
          boxShadow : '0 0 0 #b3b0a5 , inset 28px 28px 56px #b3b0a5 ,\
          0 0 0 #ffffff, inset -28px -28px 56px #ffffff'
          },
          '.neumorphism-yellow-100-flat-sm': {
          boxShadow : '7px 7px 14px #b2aa8b , inset 0 0 0 #b2aa8b ,\
          -7px -7px 14px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-yellow-100-flat-md': {
          boxShadow : '14px 14px 28px #b2aa8b , inset 0 0 0 #b2aa8b ,\
          -14px -14px 28px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-yellow-100-flat-lg': {
          boxShadow : '28px 28px 56px #b2aa8b , inset 0 0 0 #b2aa8b ,\
          -28px -28px 56px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-yellow-100-flat-invert-sm': {
          boxShadow : '0 0 0 #b2aa8b , inset 7px 7px 14px #b2aa8b ,\
          0 0 0 #ffffff, inset -7px -7px 14px #ffffff'
          },
          '.neumorphism-yellow-100-flat-invert-md': {
          boxShadow : '0 0 0 #b2aa8b , inset 14px 14px 28px #b2aa8b ,\
          0 0 0 #ffffff, inset -14px -14px 28px #ffffff'
          },
          '.neumorphism-yellow-100-flat-invert-lg': {
          boxShadow : '0 0 0 #b2aa8b , inset 28px 28px 56px #b2aa8b ,\
          0 0 0 #ffffff, inset -28px -28px 56px #ffffff'
          },
          '.neumorphism-yellow-200-flat-sm': {
          boxShadow : '7px 7px 14px #b1a161 , inset 0 0 0 #b1a161 ,\
          -7px -7px 14px #ffff9f, inset 0 0 0 #ffff9f'
          },
          '.neumorphism-yellow-200-flat-md': {
          boxShadow : '14px 14px 28px #b1a161 , inset 0 0 0 #b1a161 ,\
          -14px -14px 28px #ffff9f, inset 0 0 0 #ffff9f'
          },
          '.neumorphism-yellow-200-flat-lg': {
          boxShadow : '28px 28px 56px #b1a161 , inset 0 0 0 #b1a161 ,\
          -28px -28px 56px #ffff9f, inset 0 0 0 #ffff9f'
          },
          '.neumorphism-yellow-200-flat-invert-sm': {
          boxShadow : '0 0 0 #b1a161 , inset 7px 7px 14px #b1a161 ,\
          0 0 0 #ffff9f, inset -7px -7px 14px #ffff9f'
          },
          '.neumorphism-yellow-200-flat-invert-md': {
          boxShadow : '0 0 0 #b1a161 , inset 14px 14px 28px #b1a161 ,\
          0 0 0 #ffff9f, inset -14px -14px 28px #ffff9f'
          },
          '.neumorphism-yellow-200-flat-invert-lg': {
          boxShadow : '0 0 0 #b1a161 , inset 28px 28px 56px #b1a161 ,\
          0 0 0 #ffff9f, inset -28px -28px 56px #ffff9f'
          },
          '.neumorphism-yellow-300-flat-sm': {
          boxShadow : '7px 7px 14px #b09436 , inset 0 0 0 #b09436 ,\
          -7px -7px 14px #ffff64, inset 0 0 0 #ffff64'
          },
          '.neumorphism-yellow-300-flat-md': {
          boxShadow : '14px 14px 28px #b09436 , inset 0 0 0 #b09436 ,\
          -14px -14px 28px #ffff64, inset 0 0 0 #ffff64'
          },
          '.neumorphism-yellow-300-flat-lg': {
          boxShadow : '28px 28px 56px #b09436 , inset 0 0 0 #b09436 ,\
          -28px -28px 56px #ffff64, inset 0 0 0 #ffff64'
          },
          '.neumorphism-yellow-300-flat-invert-sm': {
          boxShadow : '0 0 0 #b09436 , inset 7px 7px 14px #b09436 ,\
          0 0 0 #ffff64, inset -7px -7px 14px #ffff64'
          },
          '.neumorphism-yellow-300-flat-invert-md': {
          boxShadow : '0 0 0 #b09436 , inset 14px 14px 28px #b09436 ,\
          0 0 0 #ffff64, inset -14px -14px 28px #ffff64'
          },
          '.neumorphism-yellow-300-flat-invert-lg': {
          boxShadow : '0 0 0 #b09436 , inset 28px 28px 56px #b09436 ,\
          0 0 0 #ffff64, inset -28px -28px 56px #ffff64'
          },
          '.neumorphism-yellow-400-flat-sm': {
          boxShadow : '7px 7px 14px #b08619 , inset 0 0 0 #b08619 ,\
          -7px -7px 14px #fff82f, inset 0 0 0 #fff82f'
          },
          '.neumorphism-yellow-400-flat-md': {
          boxShadow : '14px 14px 28px #b08619 , inset 0 0 0 #b08619 ,\
          -14px -14px 28px #fff82f, inset 0 0 0 #fff82f'
          },
          '.neumorphism-yellow-400-flat-lg': {
          boxShadow : '28px 28px 56px #b08619 , inset 0 0 0 #b08619 ,\
          -28px -28px 56px #fff82f, inset 0 0 0 #fff82f'
          },
          '.neumorphism-yellow-400-flat-invert-sm': {
          boxShadow : '0 0 0 #b08619 , inset 7px 7px 14px #b08619 ,\
          0 0 0 #fff82f, inset -7px -7px 14px #fff82f'
          },
          '.neumorphism-yellow-400-flat-invert-md': {
          boxShadow : '0 0 0 #b08619 , inset 14px 14px 28px #b08619 ,\
          0 0 0 #fff82f, inset -14px -14px 28px #fff82f'
          },
          '.neumorphism-yellow-400-flat-invert-lg': {
          boxShadow : '0 0 0 #b08619 , inset 28px 28px 56px #b08619 ,\
          0 0 0 #fff82f, inset -28px -28px 56px #fff82f'
          },
          '.neumorphism-yellow-500-flat-sm': {
          boxShadow : '7px 7px 14px #ac6f08 , inset 0 0 0 #ac6f08 ,\
          -7px -7px 14px #ffcd0e, inset 0 0 0 #ffcd0e'
          },
          '.neumorphism-yellow-500-flat-md': {
          boxShadow : '14px 14px 28px #ac6f08 , inset 0 0 0 #ac6f08 ,\
          -14px -14px 28px #ffcd0e, inset 0 0 0 #ffcd0e'
          },
          '.neumorphism-yellow-500-flat-lg': {
          boxShadow : '28px 28px 56px #ac6f08 , inset 0 0 0 #ac6f08 ,\
          -28px -28px 56px #ffcd0e, inset 0 0 0 #ffcd0e'
          },
          '.neumorphism-yellow-500-flat-invert-sm': {
          boxShadow : '0 0 0 #ac6f08 , inset 7px 7px 14px #ac6f08 ,\
          0 0 0 #ffcd0e, inset -7px -7px 14px #ffcd0e'
          },
          '.neumorphism-yellow-500-flat-invert-md': {
          boxShadow : '0 0 0 #ac6f08 , inset 14px 14px 28px #ac6f08 ,\
          0 0 0 #ffcd0e, inset -14px -14px 28px #ffcd0e'
          },
          '.neumorphism-yellow-500-flat-invert-lg': {
          boxShadow : '0 0 0 #ac6f08 , inset 28px 28px 56px #ac6f08 ,\
          0 0 0 #ffcd0e, inset -28px -28px 56px #ffcd0e'
          },
          '.neumorphism-yellow-600-flat-sm': {
          boxShadow : '7px 7px 14px #985304 , inset 0 0 0 #985304 ,\
          -7px -7px 14px #ff9b08, inset 0 0 0 #ff9b08'
          },
          '.neumorphism-yellow-600-flat-md': {
          boxShadow : '14px 14px 28px #985304 , inset 0 0 0 #985304 ,\
          -14px -14px 28px #ff9b08, inset 0 0 0 #ff9b08'
          },
          '.neumorphism-yellow-600-flat-lg': {
          boxShadow : '28px 28px 56px #985304 , inset 0 0 0 #985304 ,\
          -28px -28px 56px #ff9b08, inset 0 0 0 #ff9b08'
          },
          '.neumorphism-yellow-600-flat-invert-sm': {
          boxShadow : '0 0 0 #985304 , inset 7px 7px 14px #985304 ,\
          0 0 0 #ff9b08, inset -7px -7px 14px #ff9b08'
          },
          '.neumorphism-yellow-600-flat-invert-md': {
          boxShadow : '0 0 0 #985304 , inset 14px 14px 28px #985304 ,\
          0 0 0 #ff9b08, inset -14px -14px 28px #ff9b08'
          },
          '.neumorphism-yellow-600-flat-invert-lg': {
          boxShadow : '0 0 0 #985304 , inset 28px 28px 56px #985304 ,\
          0 0 0 #ff9b08, inset -28px -28px 56px #ff9b08'
          },
          '.neumorphism-yellow-700-flat-sm': {
          boxShadow : '7px 7px 14px #7e3a06 , inset 0 0 0 #7e3a06 ,\
          -7px -7px 14px #ea6c0c, inset 0 0 0 #ea6c0c'
          },
          '.neumorphism-yellow-700-flat-md': {
          boxShadow : '14px 14px 28px #7e3a06 , inset 0 0 0 #7e3a06 ,\
          -14px -14px 28px #ea6c0c, inset 0 0 0 #ea6c0c'
          },
          '.neumorphism-yellow-700-flat-lg': {
          boxShadow : '28px 28px 56px #7e3a06 , inset 0 0 0 #7e3a06 ,\
          -28px -28px 56px #ea6c0c, inset 0 0 0 #ea6c0c'
          },
          '.neumorphism-yellow-700-flat-invert-sm': {
          boxShadow : '0 0 0 #7e3a06 , inset 7px 7px 14px #7e3a06 ,\
          0 0 0 #ea6c0c, inset -7px -7px 14px #ea6c0c'
          },
          '.neumorphism-yellow-700-flat-invert-md': {
          boxShadow : '0 0 0 #7e3a06 , inset 14px 14px 28px #7e3a06 ,\
          0 0 0 #ea6c0c, inset -14px -14px 28px #ea6c0c'
          },
          '.neumorphism-yellow-700-flat-invert-lg': {
          boxShadow : '0 0 0 #7e3a06 , inset 28px 28px 56px #7e3a06 ,\
          0 0 0 #ea6c0c, inset -28px -28px 56px #ea6c0c'
          },
          '.neumorphism-yellow-800-flat-sm': {
          boxShadow : '7px 7px 14px #662d0a , inset 0 0 0 #662d0a ,\
          -7px -7px 14px #be5312, inset 0 0 0 #be5312'
          },
          '.neumorphism-yellow-800-flat-md': {
          boxShadow : '14px 14px 28px #662d0a , inset 0 0 0 #662d0a ,\
          -14px -14px 28px #be5312, inset 0 0 0 #be5312'
          },
          '.neumorphism-yellow-800-flat-lg': {
          boxShadow : '28px 28px 56px #662d0a , inset 0 0 0 #662d0a ,\
          -28px -28px 56px #be5312, inset 0 0 0 #be5312'
          },
          '.neumorphism-yellow-800-flat-invert-sm': {
          boxShadow : '0 0 0 #662d0a , inset 7px 7px 14px #662d0a ,\
          0 0 0 #be5312, inset -7px -7px 14px #be5312'
          },
          '.neumorphism-yellow-800-flat-invert-md': {
          boxShadow : '0 0 0 #662d0a , inset 14px 14px 28px #662d0a ,\
          0 0 0 #be5312, inset -14px -14px 28px #be5312'
          },
          '.neumorphism-yellow-800-flat-invert-lg': {
          boxShadow : '0 0 0 #662d0a , inset 28px 28px 56px #662d0a ,\
          0 0 0 #be5312, inset -28px -28px 56px #be5312'
          },
          '.neumorphism-yellow-900-flat-sm': {
          boxShadow : '7px 7px 14px #54250b , inset 0 0 0 #54250b ,\
          -7px -7px 14px #9c4514, inset 0 0 0 #9c4514'
          },
          '.neumorphism-yellow-900-flat-md': {
          boxShadow : '14px 14px 28px #54250b , inset 0 0 0 #54250b ,\
          -14px -14px 28px #9c4514, inset 0 0 0 #9c4514'
          },
          '.neumorphism-yellow-900-flat-lg': {
          boxShadow : '28px 28px 56px #54250b , inset 0 0 0 #54250b ,\
          -28px -28px 56px #9c4514, inset 0 0 0 #9c4514'
          },
          '.neumorphism-yellow-900-flat-invert-sm': {
          boxShadow : '0 0 0 #54250b , inset 7px 7px 14px #54250b ,\
          0 0 0 #9c4514, inset -7px -7px 14px #9c4514'
          },
          '.neumorphism-yellow-900-flat-invert-md': {
          boxShadow : '0 0 0 #54250b , inset 14px 14px 28px #54250b ,\
          0 0 0 #9c4514, inset -14px -14px 28px #9c4514'
          },
          '.neumorphism-yellow-900-flat-invert-lg': {
          boxShadow : '0 0 0 #54250b , inset 28px 28px 56px #54250b ,\
          0 0 0 #9c4514, inset -28px -28px 56px #9c4514'
          },
          '.neumorphism-green-50-flat-sm': {
          boxShadow : '7px 7px 14px #a5b1ac , inset 0 0 0 #a5b1ac ,\
          -7px -7px 14px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-green-50-flat-md': {
          boxShadow : '14px 14px 28px #a5b1ac , inset 0 0 0 #a5b1ac ,\
          -14px -14px 28px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-green-50-flat-lg': {
          boxShadow : '28px 28px 56px #a5b1ac , inset 0 0 0 #a5b1ac ,\
          -28px -28px 56px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-green-50-flat-invert-sm': {
          boxShadow : '0 0 0 #a5b1ac , inset 7px 7px 14px #a5b1ac ,\
          0 0 0 #ffffff, inset -7px -7px 14px #ffffff'
          },
          '.neumorphism-green-50-flat-invert-md': {
          boxShadow : '0 0 0 #a5b1ac , inset 14px 14px 28px #a5b1ac ,\
          0 0 0 #ffffff, inset -14px -14px 28px #ffffff'
          },
          '.neumorphism-green-50-flat-invert-lg': {
          boxShadow : '0 0 0 #a5b1ac , inset 28px 28px 56px #a5b1ac ,\
          0 0 0 #ffffff, inset -28px -28px 56px #ffffff'
          },
          '.neumorphism-green-100-flat-sm': {
          boxShadow : '7px 7px 14px #92afa0 , inset 0 0 0 #92afa0 ,\
          -7px -7px 14px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-green-100-flat-md': {
          boxShadow : '14px 14px 28px #92afa0 , inset 0 0 0 #92afa0 ,\
          -14px -14px 28px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-green-100-flat-lg': {
          boxShadow : '28px 28px 56px #92afa0 , inset 0 0 0 #92afa0 ,\
          -28px -28px 56px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-green-100-flat-invert-sm': {
          boxShadow : '0 0 0 #92afa0 , inset 7px 7px 14px #92afa0 ,\
          0 0 0 #ffffff, inset -7px -7px 14px #ffffff'
          },
          '.neumorphism-green-100-flat-invert-md': {
          boxShadow : '0 0 0 #92afa0 , inset 14px 14px 28px #92afa0 ,\
          0 0 0 #ffffff, inset -14px -14px 28px #ffffff'
          },
          '.neumorphism-green-100-flat-invert-lg': {
          boxShadow : '0 0 0 #92afa0 , inset 28px 28px 56px #92afa0 ,\
          0 0 0 #ffffff, inset -28px -28px 56px #ffffff'
          },
          '.neumorphism-green-200-flat-sm': {
          boxShadow : '7px 7px 14px #75aa92 , inset 0 0 0 #75aa92 ,\
          -7px -7px 14px #d9ffff, inset 0 0 0 #d9ffff'
          },
          '.neumorphism-green-200-flat-md': {
          boxShadow : '14px 14px 28px #75aa92 , inset 0 0 0 #75aa92 ,\
          -14px -14px 28px #d9ffff, inset 0 0 0 #d9ffff'
          },
          '.neumorphism-green-200-flat-lg': {
          boxShadow : '28px 28px 56px #75aa92 , inset 0 0 0 #75aa92 ,\
          -28px -28px 56px #d9ffff, inset 0 0 0 #d9ffff'
          },
          '.neumorphism-green-200-flat-invert-sm': {
          boxShadow : '0 0 0 #75aa92 , inset 7px 7px 14px #75aa92 ,\
          0 0 0 #d9ffff, inset -7px -7px 14px #d9ffff'
          },
          '.neumorphism-green-200-flat-invert-md': {
          boxShadow : '0 0 0 #75aa92 , inset 14px 14px 28px #75aa92 ,\
          0 0 0 #d9ffff, inset -14px -14px 28px #d9ffff'
          },
          '.neumorphism-green-200-flat-invert-lg': {
          boxShadow : '0 0 0 #75aa92 , inset 28px 28px 56px #75aa92 ,\
          0 0 0 #d9ffff, inset -28px -28px 56px #d9ffff'
          },
          '.neumorphism-green-300-flat-sm': {
          boxShadow : '7px 7px 14px #4da280 , inset 0 0 0 #4da280 ,\
          -7px -7px 14px #8fffee, inset 0 0 0 #8fffee'
          },
          '.neumorphism-green-300-flat-md': {
          boxShadow : '14px 14px 28px #4da280 , inset 0 0 0 #4da280 ,\
          -14px -14px 28px #8fffee, inset 0 0 0 #8fffee'
          },
          '.neumorphism-green-300-flat-lg': {
          boxShadow : '28px 28px 56px #4da280 , inset 0 0 0 #4da280 ,\
          -28px -28px 56px #8fffee, inset 0 0 0 #8fffee'
          },
          '.neumorphism-green-300-flat-invert-sm': {
          boxShadow : '0 0 0 #4da280 , inset 7px 7px 14px #4da280 ,\
          0 0 0 #8fffee, inset -7px -7px 14px #8fffee'
          },
          '.neumorphism-green-300-flat-invert-md': {
          boxShadow : '0 0 0 #4da280 , inset 14px 14px 28px #4da280 ,\
          0 0 0 #8fffee, inset -14px -14px 28px #8fffee'
          },
          '.neumorphism-green-300-flat-invert-lg': {
          boxShadow : '0 0 0 #4da280 , inset 28px 28px 56px #4da280 ,\
          0 0 0 #8fffee, inset -28px -28px 56px #8fffee'
          },
          '.neumorphism-green-400-flat-sm': {
          boxShadow : '7px 7px 14px #24946b , inset 0 0 0 #24946b ,\
          -7px -7px 14px #44ffc7, inset 0 0 0 #44ffc7'
          },
          '.neumorphism-green-400-flat-md': {
          boxShadow : '14px 14px 28px #24946b , inset 0 0 0 #24946b ,\
          -14px -14px 28px #44ffc7, inset 0 0 0 #44ffc7'
          },
          '.neumorphism-green-400-flat-lg': {
          boxShadow : '28px 28px 56px #24946b , inset 0 0 0 #24946b ,\
          -28px -28px 56px #44ffc7, inset 0 0 0 #44ffc7'
          },
          '.neumorphism-green-400-flat-invert-sm': {
          boxShadow : '0 0 0 #24946b , inset 7px 7px 14px #24946b ,\
          0 0 0 #44ffc7, inset -7px -7px 14px #44ffc7'
          },
          '.neumorphism-green-400-flat-invert-md': {
          boxShadow : '0 0 0 #24946b , inset 14px 14px 28px #24946b ,\
          0 0 0 #44ffc7, inset -14px -14px 28px #44ffc7'
          },
          '.neumorphism-green-400-flat-invert-lg': {
          boxShadow : '0 0 0 #24946b , inset 28px 28px 56px #24946b ,\
          0 0 0 #44ffc7, inset -28px -28px 56px #44ffc7'
          },
          '.neumorphism-green-500-flat-sm': {
          boxShadow : '7px 7px 14px #0b825a , inset 0 0 0 #0b825a ,\
          -7px -7px 14px #15f1a8, inset 0 0 0 #15f1a8'
          },
          '.neumorphism-green-500-flat-md': {
          boxShadow : '14px 14px 28px #0b825a , inset 0 0 0 #0b825a ,\
          -14px -14px 28px #15f1a8, inset 0 0 0 #15f1a8'
          },
          '.neumorphism-green-500-flat-lg': {
          boxShadow : '28px 28px 56px #0b825a , inset 0 0 0 #0b825a ,\
          -28px -28px 56px #15f1a8, inset 0 0 0 #15f1a8'
          },
          '.neumorphism-green-500-flat-invert-sm': {
          boxShadow : '0 0 0 #0b825a , inset 7px 7px 14px #0b825a ,\
          0 0 0 #15f1a8, inset -7px -7px 14px #15f1a8'
          },
          '.neumorphism-green-500-flat-invert-md': {
          boxShadow : '0 0 0 #0b825a , inset 14px 14px 28px #0b825a ,\
          0 0 0 #15f1a8, inset -14px -14px 28px #15f1a8'
          },
          '.neumorphism-green-500-flat-invert-lg': {
          boxShadow : '0 0 0 #0b825a , inset 28px 28px 56px #0b825a ,\
          0 0 0 #15f1a8, inset -28px -28px 56px #15f1a8'
          },
          '.neumorphism-green-600-flat-sm': {
          boxShadow : '7px 7px 14px #04694a , inset 0 0 0 #04694a ,\
          -7px -7px 14px #07c389, inset 0 0 0 #07c389'
          },
          '.neumorphism-green-600-flat-md': {
          boxShadow : '14px 14px 28px #04694a , inset 0 0 0 #04694a ,\
          -14px -14px 28px #07c389, inset 0 0 0 #07c389'
          },
          '.neumorphism-green-600-flat-lg': {
          boxShadow : '28px 28px 56px #04694a , inset 0 0 0 #04694a ,\
          -28px -28px 56px #07c389, inset 0 0 0 #07c389'
          },
          '.neumorphism-green-600-flat-invert-sm': {
          boxShadow : '0 0 0 #04694a , inset 7px 7px 14px #04694a ,\
          0 0 0 #07c389, inset -7px -7px 14px #07c389'
          },
          '.neumorphism-green-600-flat-invert-md': {
          boxShadow : '0 0 0 #04694a , inset 14px 14px 28px #04694a ,\
          0 0 0 #07c389, inset -14px -14px 28px #07c389'
          },
          '.neumorphism-green-600-flat-invert-lg': {
          boxShadow : '0 0 0 #04694a , inset 28px 28px 56px #04694a ,\
          0 0 0 #07c389, inset -28px -28px 56px #07c389'
          },
          '.neumorphism-green-700-flat-sm': {
          boxShadow : '7px 7px 14px #03543d , inset 0 0 0 #03543d ,\
          -7px -7px 14px #059c71, inset 0 0 0 #059c71'
          },
          '.neumorphism-green-700-flat-md': {
          boxShadow : '14px 14px 28px #03543d , inset 0 0 0 #03543d ,\
          -14px -14px 28px #059c71, inset 0 0 0 #059c71'
          },
          '.neumorphism-green-700-flat-lg': {
          boxShadow : '28px 28px 56px #03543d , inset 0 0 0 #03543d ,\
          -28px -28px 56px #059c71, inset 0 0 0 #059c71'
          },
          '.neumorphism-green-700-flat-invert-sm': {
          boxShadow : '0 0 0 #03543d , inset 7px 7px 14px #03543d ,\
          0 0 0 #059c71, inset -7px -7px 14px #059c71'
          },
          '.neumorphism-green-700-flat-invert-md': {
          boxShadow : '0 0 0 #03543d , inset 14px 14px 28px #03543d ,\
          0 0 0 #059c71, inset -14px -14px 28px #059c71'
          },
          '.neumorphism-green-700-flat-invert-lg': {
          boxShadow : '0 0 0 #03543d , inset 28px 28px 56px #03543d ,\
          0 0 0 #059c71, inset -28px -28px 56px #059c71'
          },
          '.neumorphism-green-800-flat-sm': {
          boxShadow : '7px 7px 14px #044331 , inset 0 0 0 #044331 ,\
          -7px -7px 14px #087c5b, inset 0 0 0 #087c5b'
          },
          '.neumorphism-green-800-flat-md': {
          boxShadow : '14px 14px 28px #044331 , inset 0 0 0 #044331 ,\
          -14px -14px 28px #087c5b, inset 0 0 0 #087c5b'
          },
          '.neumorphism-green-800-flat-lg': {
          boxShadow : '28px 28px 56px #044331 , inset 0 0 0 #044331 ,\
          -28px -28px 56px #087c5b, inset 0 0 0 #087c5b'
          },
          '.neumorphism-green-800-flat-invert-sm': {
          boxShadow : '0 0 0 #044331 , inset 7px 7px 14px #044331 ,\
          0 0 0 #087c5b, inset -7px -7px 14px #087c5b'
          },
          '.neumorphism-green-800-flat-invert-md': {
          boxShadow : '0 0 0 #044331 , inset 14px 14px 28px #044331 ,\
          0 0 0 #087c5b, inset -14px -14px 28px #087c5b'
          },
          '.neumorphism-green-800-flat-invert-lg': {
          boxShadow : '0 0 0 #044331 , inset 28px 28px 56px #044331 ,\
          0 0 0 #087c5b, inset -28px -28px 56px #087c5b'
          },
          '.neumorphism-green-900-flat-sm': {
          boxShadow : '7px 7px 14px #054232 , inset 0 0 0 #054232 ,\
          -7px -7px 14px #08654d, inset 0 0 0 #08654d'
          },
          '.neumorphism-green-900-flat-md': {
          boxShadow : '14px 14px 28px #054232 , inset 0 0 0 #054232 ,\
          -14px -14px 28px #08654d, inset 0 0 0 #08654d'
          },
          '.neumorphism-green-900-flat-lg': {
          boxShadow : '28px 28px 56px #054232 , inset 0 0 0 #054232 ,\
          -28px -28px 56px #08654d, inset 0 0 0 #08654d'
          },
          '.neumorphism-green-900-flat-invert-sm': {
          boxShadow : '0 0 0 #054232 , inset 7px 7px 14px #054232 ,\
          0 0 0 #08654d, inset -7px -7px 14px #08654d'
          },
          '.neumorphism-green-900-flat-invert-md': {
          boxShadow : '0 0 0 #054232 , inset 14px 14px 28px #054232 ,\
          0 0 0 #08654d, inset -14px -14px 28px #08654d'
          },
          '.neumorphism-green-900-flat-invert-lg': {
          boxShadow : '0 0 0 #054232 , inset 28px 28px 56px #054232 ,\
          0 0 0 #08654d, inset -28px -28px 56px #08654d'
          },
          '.neumorphism-blue-50-flat-sm': {
          boxShadow : '7px 7px 14px #a7acb3 , inset 0 0 0 #a7acb3 ,\
          -7px -7px 14px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-blue-50-flat-md': {
          boxShadow : '14px 14px 28px #a7acb3 , inset 0 0 0 #a7acb3 ,\
          -14px -14px 28px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-blue-50-flat-lg': {
          boxShadow : '28px 28px 56px #a7acb3 , inset 0 0 0 #a7acb3 ,\
          -28px -28px 56px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-blue-50-flat-invert-sm': {
          boxShadow : '0 0 0 #a7acb3 , inset 7px 7px 14px #a7acb3 ,\
          0 0 0 #ffffff, inset -7px -7px 14px #ffffff'
          },
          '.neumorphism-blue-50-flat-invert-md': {
          boxShadow : '0 0 0 #a7acb3 , inset 14px 14px 28px #a7acb3 ,\
          0 0 0 #ffffff, inset -14px -14px 28px #ffffff'
          },
          '.neumorphism-blue-50-flat-invert-lg': {
          boxShadow : '0 0 0 #a7acb3 , inset 28px 28px 56px #a7acb3 ,\
          0 0 0 #ffffff, inset -28px -28px 56px #ffffff'
          },
          '.neumorphism-blue-100-flat-sm': {
          boxShadow : '7px 7px 14px #99a4b2 , inset 0 0 0 #99a4b2 ,\
          -7px -7px 14px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-blue-100-flat-md': {
          boxShadow : '14px 14px 28px #99a4b2 , inset 0 0 0 #99a4b2 ,\
          -14px -14px 28px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-blue-100-flat-lg': {
          boxShadow : '28px 28px 56px #99a4b2 , inset 0 0 0 #99a4b2 ,\
          -28px -28px 56px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-blue-100-flat-invert-sm': {
          boxShadow : '0 0 0 #99a4b2 , inset 7px 7px 14px #99a4b2 ,\
          0 0 0 #ffffff, inset -7px -7px 14px #ffffff'
          },
          '.neumorphism-blue-100-flat-invert-md': {
          boxShadow : '0 0 0 #99a4b2 , inset 14px 14px 28px #99a4b2 ,\
          0 0 0 #ffffff, inset -14px -14px 28px #ffffff'
          },
          '.neumorphism-blue-100-flat-invert-lg': {
          boxShadow : '0 0 0 #99a4b2 , inset 28px 28px 56px #99a4b2 ,\
          0 0 0 #ffffff, inset -28px -28px 56px #ffffff'
          },
          '.neumorphism-blue-200-flat-sm': {
          boxShadow : '7px 7px 14px #8699b2 , inset 0 0 0 #8699b2 ,\
          -7px -7px 14px #f8ffff, inset 0 0 0 #f8ffff'
          },
          '.neumorphism-blue-200-flat-md': {
          boxShadow : '14px 14px 28px #8699b2 , inset 0 0 0 #8699b2 ,\
          -14px -14px 28px #f8ffff, inset 0 0 0 #f8ffff'
          },
          '.neumorphism-blue-200-flat-lg': {
          boxShadow : '28px 28px 56px #8699b2 , inset 0 0 0 #8699b2 ,\
          -28px -28px 56px #f8ffff, inset 0 0 0 #f8ffff'
          },
          '.neumorphism-blue-200-flat-invert-sm': {
          boxShadow : '0 0 0 #8699b2 , inset 7px 7px 14px #8699b2 ,\
          0 0 0 #f8ffff, inset -7px -7px 14px #f8ffff'
          },
          '.neumorphism-blue-200-flat-invert-md': {
          boxShadow : '0 0 0 #8699b2 , inset 14px 14px 28px #8699b2 ,\
          0 0 0 #f8ffff, inset -14px -14px 28px #f8ffff'
          },
          '.neumorphism-blue-200-flat-invert-lg': {
          boxShadow : '0 0 0 #8699b2 , inset 28px 28px 56px #8699b2 ,\
          0 0 0 #f8ffff, inset -28px -28px 56px #f8ffff'
          },
          '.neumorphism-blue-300-flat-sm': {
          boxShadow : '7px 7px 14px #678ab1 , inset 0 0 0 #678ab1 ,\
          -7px -7px 14px #bfffff, inset 0 0 0 #bfffff'
          },
          '.neumorphism-blue-300-flat-md': {
          boxShadow : '14px 14px 28px #678ab1 , inset 0 0 0 #678ab1 ,\
          -14px -14px 28px #bfffff, inset 0 0 0 #bfffff'
          },
          '.neumorphism-blue-300-flat-lg': {
          boxShadow : '28px 28px 56px #678ab1 , inset 0 0 0 #678ab1 ,\
          -28px -28px 56px #bfffff, inset 0 0 0 #bfffff'
          },
          '.neumorphism-blue-300-flat-invert-sm': {
          boxShadow : '0 0 0 #678ab1 , inset 7px 7px 14px #678ab1 ,\
          0 0 0 #bfffff, inset -7px -7px 14px #bfffff'
          },
          '.neumorphism-blue-300-flat-invert-md': {
          boxShadow : '0 0 0 #678ab1 , inset 14px 14px 28px #678ab1 ,\
          0 0 0 #bfffff, inset -14px -14px 28px #bfffff'
          },
          '.neumorphism-blue-300-flat-invert-lg': {
          boxShadow : '0 0 0 #678ab1 , inset 28px 28px 56px #678ab1 ,\
          0 0 0 #bfffff, inset -28px -28px 56px #bfffff'
          },
          '.neumorphism-blue-400-flat-sm': {
          boxShadow : '7px 7px 14px #4374af , inset 0 0 0 #4374af ,\
          -7px -7px 14px #7dd7ff, inset 0 0 0 #7dd7ff'
          },
          '.neumorphism-blue-400-flat-md': {
          boxShadow : '14px 14px 28px #4374af , inset 0 0 0 #4374af ,\
          -14px -14px 28px #7dd7ff, inset 0 0 0 #7dd7ff'
          },
          '.neumorphism-blue-400-flat-lg': {
          boxShadow : '28px 28px 56px #4374af , inset 0 0 0 #4374af ,\
          -28px -28px 56px #7dd7ff, inset 0 0 0 #7dd7ff'
          },
          '.neumorphism-blue-400-flat-invert-sm': {
          boxShadow : '0 0 0 #4374af , inset 7px 7px 14px #4374af ,\
          0 0 0 #7dd7ff, inset -7px -7px 14px #7dd7ff'
          },
          '.neumorphism-blue-400-flat-invert-md': {
          boxShadow : '0 0 0 #4374af , inset 14px 14px 28px #4374af ,\
          0 0 0 #7dd7ff, inset -14px -14px 28px #7dd7ff'
          },
          '.neumorphism-blue-400-flat-invert-lg': {
          boxShadow : '0 0 0 #4374af , inset 28px 28px 56px #4374af ,\
          0 0 0 #7dd7ff, inset -28px -28px 56px #7dd7ff'
          },
          '.neumorphism-blue-500-flat-sm': {
          boxShadow : '7px 7px 14px #295bac , inset 0 0 0 #295bac ,\
          -7px -7px 14px #4da9ff, inset 0 0 0 #4da9ff'
          },
          '.neumorphism-blue-500-flat-md': {
          boxShadow : '14px 14px 28px #295bac , inset 0 0 0 #295bac ,\
          -14px -14px 28px #4da9ff, inset 0 0 0 #4da9ff'
          },
          '.neumorphism-blue-500-flat-lg': {
          boxShadow : '28px 28px 56px #295bac , inset 0 0 0 #295bac ,\
          -28px -28px 56px #4da9ff, inset 0 0 0 #4da9ff'
          },
          '.neumorphism-blue-500-flat-invert-sm': {
          boxShadow : '0 0 0 #295bac , inset 7px 7px 14px #295bac ,\
          0 0 0 #4da9ff, inset -7px -7px 14px #4da9ff'
          },
          '.neumorphism-blue-500-flat-invert-md': {
          boxShadow : '0 0 0 #295bac , inset 14px 14px 28px #295bac ,\
          0 0 0 #4da9ff, inset -14px -14px 28px #4da9ff'
          },
          '.neumorphism-blue-500-flat-invert-lg': {
          boxShadow : '0 0 0 #295bac , inset 28px 28px 56px #295bac ,\
          0 0 0 #4da9ff, inset -28px -28px 56px #4da9ff'
          },
          '.neumorphism-blue-600-flat-sm': {
          boxShadow : '7px 7px 14px #1a45a5 , inset 0 0 0 #1a45a5 ,\
          -7px -7px 14px #3081ff, inset 0 0 0 #3081ff'
          },
          '.neumorphism-blue-600-flat-md': {
          boxShadow : '14px 14px 28px #1a45a5 , inset 0 0 0 #1a45a5 ,\
          -14px -14px 28px #3081ff, inset 0 0 0 #3081ff'
          },
          '.neumorphism-blue-600-flat-lg': {
          boxShadow : '28px 28px 56px #1a45a5 , inset 0 0 0 #1a45a5 ,\
          -28px -28px 56px #3081ff, inset 0 0 0 #3081ff'
          },
          '.neumorphism-blue-600-flat-invert-sm': {
          boxShadow : '0 0 0 #1a45a5 , inset 7px 7px 14px #1a45a5 ,\
          0 0 0 #3081ff, inset -7px -7px 14px #3081ff'
          },
          '.neumorphism-blue-600-flat-invert-md': {
          boxShadow : '0 0 0 #1a45a5 , inset 14px 14px 28px #1a45a5 ,\
          0 0 0 #3081ff, inset -14px -14px 28px #3081ff'
          },
          '.neumorphism-blue-600-flat-invert-lg': {
          boxShadow : '0 0 0 #1a45a5 , inset 28px 28px 56px #1a45a5 ,\
          0 0 0 #3081ff, inset -28px -28px 56px #3081ff'
          },
          '.neumorphism-blue-700-flat-sm': {
          boxShadow : '7px 7px 14px #143797 , inset 0 0 0 #143797 ,\
          -7px -7px 14px #2665ff, inset 0 0 0 #2665ff'
          },
          '.neumorphism-blue-700-flat-md': {
          boxShadow : '14px 14px 28px #143797 , inset 0 0 0 #143797 ,\
          -14px -14px 28px #2665ff, inset 0 0 0 #2665ff'
          },
          '.neumorphism-blue-700-flat-lg': {
          boxShadow : '28px 28px 56px #143797 , inset 0 0 0 #143797 ,\
          -28px -28px 56px #2665ff, inset 0 0 0 #2665ff'
          },
          '.neumorphism-blue-700-flat-invert-sm': {
          boxShadow : '0 0 0 #143797 , inset 7px 7px 14px #143797 ,\
          0 0 0 #2665ff, inset -7px -7px 14px #2665ff'
          },
          '.neumorphism-blue-700-flat-invert-md': {
          boxShadow : '0 0 0 #143797 , inset 14px 14px 28px #143797 ,\
          0 0 0 #2665ff, inset -14px -14px 28px #2665ff'
          },
          '.neumorphism-blue-700-flat-invert-lg': {
          boxShadow : '0 0 0 #143797 , inset 28px 28px 56px #143797 ,\
          0 0 0 #2665ff, inset -28px -28px 56px #2665ff'
          },
          '.neumorphism-blue-800-flat-sm': {
          boxShadow : '7px 7px 14px #152d7b , inset 0 0 0 #152d7b ,\
          -7px -7px 14px #2753e4, inset 0 0 0 #2753e4'
          },
          '.neumorphism-blue-800-flat-md': {
          boxShadow : '14px 14px 28px #152d7b , inset 0 0 0 #152d7b ,\
          -14px -14px 28px #2753e4, inset 0 0 0 #2753e4'
          },
          '.neumorphism-blue-800-flat-lg': {
          boxShadow : '28px 28px 56px #152d7b , inset 0 0 0 #152d7b ,\
          -28px -28px 56px #2753e4, inset 0 0 0 #2753e4'
          },
          '.neumorphism-blue-800-flat-invert-sm': {
          boxShadow : '0 0 0 #152d7b , inset 7px 7px 14px #152d7b ,\
          0 0 0 #2753e4, inset -7px -7px 14px #2753e4'
          },
          '.neumorphism-blue-800-flat-invert-md': {
          boxShadow : '0 0 0 #152d7b , inset 14px 14px 28px #152d7b ,\
          0 0 0 #2753e4, inset -14px -14px 28px #2753e4'
          },
          '.neumorphism-blue-800-flat-invert-lg': {
          boxShadow : '0 0 0 #152d7b , inset 28px 28px 56px #152d7b ,\
          0 0 0 #2753e4, inset -28px -28px 56px #2753e4'
          },
          '.neumorphism-blue-900-flat-sm': {
          boxShadow : '7px 7px 14px #152961 , inset 0 0 0 #152961 ,\
          -7px -7px 14px #274bb3, inset 0 0 0 #274bb3'
          },
          '.neumorphism-blue-900-flat-md': {
          boxShadow : '14px 14px 28px #152961 , inset 0 0 0 #152961 ,\
          -14px -14px 28px #274bb3, inset 0 0 0 #274bb3'
          },
          '.neumorphism-blue-900-flat-lg': {
          boxShadow : '28px 28px 56px #152961 , inset 0 0 0 #152961 ,\
          -28px -28px 56px #274bb3, inset 0 0 0 #274bb3'
          },
          '.neumorphism-blue-900-flat-invert-sm': {
          boxShadow : '0 0 0 #152961 , inset 7px 7px 14px #152961 ,\
          0 0 0 #274bb3, inset -7px -7px 14px #274bb3'
          },
          '.neumorphism-blue-900-flat-invert-md': {
          boxShadow : '0 0 0 #152961 , inset 14px 14px 28px #152961 ,\
          0 0 0 #274bb3, inset -14px -14px 28px #274bb3'
          },
          '.neumorphism-blue-900-flat-invert-lg': {
          boxShadow : '0 0 0 #152961 , inset 28px 28px 56px #152961 ,\
          0 0 0 #274bb3, inset -28px -28px 56px #274bb3'
          },
          '.neumorphism-indigo-50-flat-sm': {
          boxShadow : '7px 7px 14px #a7a9b3 , inset 0 0 0 #a7a9b3 ,\
          -7px -7px 14px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-indigo-50-flat-md': {
          boxShadow : '14px 14px 28px #a7a9b3 , inset 0 0 0 #a7a9b3 ,\
          -14px -14px 28px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-indigo-50-flat-lg': {
          boxShadow : '28px 28px 56px #a7a9b3 , inset 0 0 0 #a7a9b3 ,\
          -28px -28px 56px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-indigo-50-flat-invert-sm': {
          boxShadow : '0 0 0 #a7a9b3 , inset 7px 7px 14px #a7a9b3 ,\
          0 0 0 #ffffff, inset -7px -7px 14px #ffffff'
          },
          '.neumorphism-indigo-50-flat-invert-md': {
          boxShadow : '0 0 0 #a7a9b3 , inset 14px 14px 28px #a7a9b3 ,\
          0 0 0 #ffffff, inset -14px -14px 28px #ffffff'
          },
          '.neumorphism-indigo-50-flat-invert-lg': {
          boxShadow : '0 0 0 #a7a9b3 , inset 28px 28px 56px #a7a9b3 ,\
          0 0 0 #ffffff, inset -28px -28px 56px #ffffff'
          },
          '.neumorphism-indigo-100-flat-sm': {
          boxShadow : '7px 7px 14px #9da2b3 , inset 0 0 0 #9da2b3 ,\
          -7px -7px 14px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-indigo-100-flat-md': {
          boxShadow : '14px 14px 28px #9da2b3 , inset 0 0 0 #9da2b3 ,\
          -14px -14px 28px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-indigo-100-flat-lg': {
          boxShadow : '28px 28px 56px #9da2b3 , inset 0 0 0 #9da2b3 ,\
          -28px -28px 56px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-indigo-100-flat-invert-sm': {
          boxShadow : '0 0 0 #9da2b3 , inset 7px 7px 14px #9da2b3 ,\
          0 0 0 #ffffff, inset -7px -7px 14px #ffffff'
          },
          '.neumorphism-indigo-100-flat-invert-md': {
          boxShadow : '0 0 0 #9da2b3 , inset 14px 14px 28px #9da2b3 ,\
          0 0 0 #ffffff, inset -14px -14px 28px #ffffff'
          },
          '.neumorphism-indigo-100-flat-invert-lg': {
          boxShadow : '0 0 0 #9da2b3 , inset 28px 28px 56px #9da2b3 ,\
          0 0 0 #ffffff, inset -28px -28px 56px #ffffff'
          },
          '.neumorphism-indigo-200-flat-sm': {
          boxShadow : '7px 7px 14px #8b93b2 , inset 0 0 0 #8b93b2 ,\
          -7px -7px 14px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-indigo-200-flat-md': {
          boxShadow : '14px 14px 28px #8b93b2 , inset 0 0 0 #8b93b2 ,\
          -14px -14px 28px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-indigo-200-flat-lg': {
          boxShadow : '28px 28px 56px #8b93b2 , inset 0 0 0 #8b93b2 ,\
          -28px -28px 56px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-indigo-200-flat-invert-sm': {
          boxShadow : '0 0 0 #8b93b2 , inset 7px 7px 14px #8b93b2 ,\
          0 0 0 #ffffff, inset -7px -7px 14px #ffffff'
          },
          '.neumorphism-indigo-200-flat-invert-md': {
          boxShadow : '0 0 0 #8b93b2 , inset 14px 14px 28px #8b93b2 ,\
          0 0 0 #ffffff, inset -14px -14px 28px #ffffff'
          },
          '.neumorphism-indigo-200-flat-invert-lg': {
          boxShadow : '0 0 0 #8b93b2 , inset 28px 28px 56px #8b93b2 ,\
          0 0 0 #ffffff, inset -28px -28px 56px #ffffff'
          },
          '.neumorphism-indigo-300-flat-sm': {
          boxShadow : '7px 7px 14px #747eb0 , inset 0 0 0 #747eb0 ,\
          -7px -7px 14px #d7eaff, inset 0 0 0 #d7eaff'
          },
          '.neumorphism-indigo-300-flat-md': {
          boxShadow : '14px 14px 28px #747eb0 , inset 0 0 0 #747eb0 ,\
          -14px -14px 28px #d7eaff, inset 0 0 0 #d7eaff'
          },
          '.neumorphism-indigo-300-flat-lg': {
          boxShadow : '28px 28px 56px #747eb0 , inset 0 0 0 #747eb0 ,\
          -28px -28px 56px #d7eaff, inset 0 0 0 #d7eaff'
          },
          '.neumorphism-indigo-300-flat-invert-sm': {
          boxShadow : '0 0 0 #747eb0 , inset 7px 7px 14px #747eb0 ,\
          0 0 0 #d7eaff, inset -7px -7px 14px #d7eaff'
          },
          '.neumorphism-indigo-300-flat-invert-md': {
          boxShadow : '0 0 0 #747eb0 , inset 14px 14px 28px #747eb0 ,\
          0 0 0 #d7eaff, inset -14px -14px 28px #d7eaff'
          },
          '.neumorphism-indigo-300-flat-invert-lg': {
          boxShadow : '0 0 0 #747eb0 , inset 28px 28px 56px #747eb0 ,\
          0 0 0 #d7eaff, inset -28px -28px 56px #d7eaff'
          },
          '.neumorphism-indigo-400-flat-sm': {
          boxShadow : '7px 7px 14px #5a62ae , inset 0 0 0 #5a62ae ,\
          -7px -7px 14px #a8b6ff, inset 0 0 0 #a8b6ff'
          },
          '.neumorphism-indigo-400-flat-md': {
          boxShadow : '14px 14px 28px #5a62ae , inset 0 0 0 #5a62ae ,\
          -14px -14px 28px #a8b6ff, inset 0 0 0 #a8b6ff'
          },
          '.neumorphism-indigo-400-flat-lg': {
          boxShadow : '28px 28px 56px #5a62ae , inset 0 0 0 #5a62ae ,\
          -28px -28px 56px #a8b6ff, inset 0 0 0 #a8b6ff'
          },
          '.neumorphism-indigo-400-flat-invert-sm': {
          boxShadow : '0 0 0 #5a62ae , inset 7px 7px 14px #5a62ae ,\
          0 0 0 #a8b6ff, inset -7px -7px 14px #a8b6ff'
          },
          '.neumorphism-indigo-400-flat-invert-md': {
          boxShadow : '0 0 0 #5a62ae , inset 14px 14px 28px #5a62ae ,\
          0 0 0 #a8b6ff, inset -14px -14px 28px #a8b6ff'
          },
          '.neumorphism-indigo-400-flat-invert-lg': {
          boxShadow : '0 0 0 #5a62ae , inset 28px 28px 56px #5a62ae ,\
          0 0 0 #a8b6ff, inset -28px -28px 56px #a8b6ff'
          },
          '.neumorphism-indigo-500-flat-sm': {
          boxShadow : '7px 7px 14px #4547a9 , inset 0 0 0 #4547a9 ,\
          -7px -7px 14px #8185ff, inset 0 0 0 #8185ff'
          },
          '.neumorphism-indigo-500-flat-md': {
          boxShadow : '14px 14px 28px #4547a9 , inset 0 0 0 #4547a9 ,\
          -14px -14px 28px #8185ff, inset 0 0 0 #8185ff'
          },
          '.neumorphism-indigo-500-flat-lg': {
          boxShadow : '28px 28px 56px #4547a9 , inset 0 0 0 #4547a9 ,\
          -28px -28px 56px #8185ff, inset 0 0 0 #8185ff'
          },
          '.neumorphism-indigo-500-flat-invert-sm': {
          boxShadow : '0 0 0 #4547a9 , inset 7px 7px 14px #4547a9 ,\
          0 0 0 #8185ff, inset -7px -7px 14px #8185ff'
          },
          '.neumorphism-indigo-500-flat-invert-md': {
          boxShadow : '0 0 0 #4547a9 , inset 14px 14px 28px #4547a9 ,\
          0 0 0 #8185ff, inset -14px -14px 28px #8185ff'
          },
          '.neumorphism-indigo-500-flat-invert-lg': {
          boxShadow : '0 0 0 #4547a9 , inset 28px 28px 56px #4547a9 ,\
          0 0 0 #8185ff, inset -28px -28px 56px #8185ff'
          },
          '.neumorphism-indigo-600-flat-sm': {
          boxShadow : '7px 7px 14px #3731a0 , inset 0 0 0 #3731a0 ,\
          -7px -7px 14px #675bff, inset 0 0 0 #675bff'
          },
          '.neumorphism-indigo-600-flat-md': {
          boxShadow : '14px 14px 28px #3731a0 , inset 0 0 0 #3731a0 ,\
          -14px -14px 28px #675bff, inset 0 0 0 #675bff'
          },
          '.neumorphism-indigo-600-flat-lg': {
          boxShadow : '28px 28px 56px #3731a0 , inset 0 0 0 #3731a0 ,\
          -28px -28px 56px #675bff, inset 0 0 0 #675bff'
          },
          '.neumorphism-indigo-600-flat-invert-sm': {
          boxShadow : '0 0 0 #3731a0 , inset 7px 7px 14px #3731a0 ,\
          0 0 0 #675bff, inset -7px -7px 14px #675bff'
          },
          '.neumorphism-indigo-600-flat-invert-md': {
          boxShadow : '0 0 0 #3731a0 , inset 14px 14px 28px #3731a0 ,\
          0 0 0 #675bff, inset -14px -14px 28px #675bff'
          },
          '.neumorphism-indigo-600-flat-invert-lg': {
          boxShadow : '0 0 0 #3731a0 , inset 28px 28px 56px #3731a0 ,\
          0 0 0 #675bff, inset -28px -28px 56px #675bff'
          },
          '.neumorphism-indigo-700-flat-sm': {
          boxShadow : '7px 7px 14px #2f278d , inset 0 0 0 #2f278d ,\
          -7px -7px 14px #5749ff, inset 0 0 0 #5749ff'
          },
          '.neumorphism-indigo-700-flat-md': {
          boxShadow : '14px 14px 28px #2f278d , inset 0 0 0 #2f278d ,\
          -14px -14px 28px #5749ff, inset 0 0 0 #5749ff'
          },
          '.neumorphism-indigo-700-flat-lg': {
          boxShadow : '28px 28px 56px #2f278d , inset 0 0 0 #2f278d ,\
          -28px -28px 56px #5749ff, inset 0 0 0 #5749ff'
          },
          '.neumorphism-indigo-700-flat-invert-sm': {
          boxShadow : '0 0 0 #2f278d , inset 7px 7px 14px #2f278d ,\
          0 0 0 #5749ff, inset -7px -7px 14px #5749ff'
          },
          '.neumorphism-indigo-700-flat-invert-md': {
          boxShadow : '0 0 0 #2f278d , inset 14px 14px 28px #2f278d ,\
          0 0 0 #5749ff, inset -14px -14px 28px #5749ff'
          },
          '.neumorphism-indigo-700-flat-invert-lg': {
          boxShadow : '0 0 0 #2f278d , inset 28px 28px 56px #2f278d ,\
          0 0 0 #5749ff, inset -28px -28px 56px #5749ff'
          },
          '.neumorphism-indigo-800-flat-sm': {
          boxShadow : '7px 7px 14px #272272 , inset 0 0 0 #272272 ,\
          -7px -7px 14px #483ed4, inset 0 0 0 #483ed4'
          },
          '.neumorphism-indigo-800-flat-md': {
          boxShadow : '14px 14px 28px #272272 , inset 0 0 0 #272272 ,\
          -14px -14px 28px #483ed4, inset 0 0 0 #483ed4'
          },
          '.neumorphism-indigo-800-flat-lg': {
          boxShadow : '28px 28px 56px #272272 , inset 0 0 0 #272272 ,\
          -28px -28px 56px #483ed4, inset 0 0 0 #483ed4'
          },
          '.neumorphism-indigo-800-flat-invert-sm': {
          boxShadow : '0 0 0 #272272 , inset 7px 7px 14px #272272 ,\
          0 0 0 #483ed4, inset -7px -7px 14px #483ed4'
          },
          '.neumorphism-indigo-800-flat-invert-md': {
          boxShadow : '0 0 0 #272272 , inset 14px 14px 28px #272272 ,\
          0 0 0 #483ed4, inset -14px -14px 28px #483ed4'
          },
          '.neumorphism-indigo-800-flat-invert-lg': {
          boxShadow : '0 0 0 #272272 , inset 28px 28px 56px #272272 ,\
          0 0 0 #483ed4, inset -28px -28px 56px #483ed4'
          },
          '.neumorphism-indigo-900-flat-sm': {
          boxShadow : '7px 7px 14px #22205a , inset 0 0 0 #22205a ,\
          -7px -7px 14px #403ca8, inset 0 0 0 #403ca8'
          },
          '.neumorphism-indigo-900-flat-md': {
          boxShadow : '14px 14px 28px #22205a , inset 0 0 0 #22205a ,\
          -14px -14px 28px #403ca8, inset 0 0 0 #403ca8'
          },
          '.neumorphism-indigo-900-flat-lg': {
          boxShadow : '28px 28px 56px #22205a , inset 0 0 0 #22205a ,\
          -28px -28px 56px #403ca8, inset 0 0 0 #403ca8'
          },
          '.neumorphism-indigo-900-flat-invert-sm': {
          boxShadow : '0 0 0 #22205a , inset 7px 7px 14px #22205a ,\
          0 0 0 #403ca8, inset -7px -7px 14px #403ca8'
          },
          '.neumorphism-indigo-900-flat-invert-md': {
          boxShadow : '0 0 0 #22205a , inset 14px 14px 28px #22205a ,\
          0 0 0 #403ca8, inset -14px -14px 28px #403ca8'
          },
          '.neumorphism-indigo-900-flat-invert-lg': {
          boxShadow : '0 0 0 #22205a , inset 28px 28px 56px #22205a ,\
          0 0 0 #403ca8, inset -28px -28px 56px #403ca8'
          },
          '.neumorphism-purple-50-flat-sm': {
          boxShadow : '7px 7px 14px #acaab3 , inset 0 0 0 #acaab3 ,\
          -7px -7px 14px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-purple-50-flat-md': {
          boxShadow : '14px 14px 28px #acaab3 , inset 0 0 0 #acaab3 ,\
          -14px -14px 28px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-purple-50-flat-lg': {
          boxShadow : '28px 28px 56px #acaab3 , inset 0 0 0 #acaab3 ,\
          -28px -28px 56px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-purple-50-flat-invert-sm': {
          boxShadow : '0 0 0 #acaab3 , inset 7px 7px 14px #acaab3 ,\
          0 0 0 #ffffff, inset -7px -7px 14px #ffffff'
          },
          '.neumorphism-purple-50-flat-invert-md': {
          boxShadow : '0 0 0 #acaab3 , inset 14px 14px 28px #acaab3 ,\
          0 0 0 #ffffff, inset -14px -14px 28px #ffffff'
          },
          '.neumorphism-purple-50-flat-invert-lg': {
          boxShadow : '0 0 0 #acaab3 , inset 28px 28px 56px #acaab3 ,\
          0 0 0 #ffffff, inset -28px -28px 56px #ffffff'
          },
          '.neumorphism-purple-100-flat-sm': {
          boxShadow : '7px 7px 14px #a6a3b2 , inset 0 0 0 #a6a3b2 ,\
          -7px -7px 14px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-purple-100-flat-md': {
          boxShadow : '14px 14px 28px #a6a3b2 , inset 0 0 0 #a6a3b2 ,\
          -14px -14px 28px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-purple-100-flat-lg': {
          boxShadow : '28px 28px 56px #a6a3b2 , inset 0 0 0 #a6a3b2 ,\
          -28px -28px 56px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-purple-100-flat-invert-sm': {
          boxShadow : '0 0 0 #a6a3b2 , inset 7px 7px 14px #a6a3b2 ,\
          0 0 0 #ffffff, inset -7px -7px 14px #ffffff'
          },
          '.neumorphism-purple-100-flat-invert-md': {
          boxShadow : '0 0 0 #a6a3b2 , inset 14px 14px 28px #a6a3b2 ,\
          0 0 0 #ffffff, inset -14px -14px 28px #ffffff'
          },
          '.neumorphism-purple-100-flat-invert-lg': {
          boxShadow : '0 0 0 #a6a3b2 , inset 28px 28px 56px #a6a3b2 ,\
          0 0 0 #ffffff, inset -28px -28px 56px #ffffff'
          },
          '.neumorphism-purple-200-flat-sm': {
          boxShadow : '7px 7px 14px #9b96b2 , inset 0 0 0 #9b96b2 ,\
          -7px -7px 14px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-purple-200-flat-md': {
          boxShadow : '14px 14px 28px #9b96b2 , inset 0 0 0 #9b96b2 ,\
          -14px -14px 28px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-purple-200-flat-lg': {
          boxShadow : '28px 28px 56px #9b96b2 , inset 0 0 0 #9b96b2 ,\
          -28px -28px 56px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-purple-200-flat-invert-sm': {
          boxShadow : '0 0 0 #9b96b2 , inset 7px 7px 14px #9b96b2 ,\
          0 0 0 #ffffff, inset -7px -7px 14px #ffffff'
          },
          '.neumorphism-purple-200-flat-invert-md': {
          boxShadow : '0 0 0 #9b96b2 , inset 14px 14px 28px #9b96b2 ,\
          0 0 0 #ffffff, inset -14px -14px 28px #ffffff'
          },
          '.neumorphism-purple-200-flat-invert-lg': {
          boxShadow : '0 0 0 #9b96b2 , inset 28px 28px 56px #9b96b2 ,\
          0 0 0 #ffffff, inset -28px -28px 56px #ffffff'
          },
          '.neumorphism-purple-300-flat-sm': {
          boxShadow : '7px 7px 14px #897fb1 , inset 0 0 0 #897fb1 ,\
          -7px -7px 14px #ffebff, inset 0 0 0 #ffebff'
          },
          '.neumorphism-purple-300-flat-md': {
          boxShadow : '14px 14px 28px #897fb1 , inset 0 0 0 #897fb1 ,\
          -14px -14px 28px #ffebff, inset 0 0 0 #ffebff'
          },
          '.neumorphism-purple-300-flat-lg': {
          boxShadow : '28px 28px 56px #897fb1 , inset 0 0 0 #897fb1 ,\
          -28px -28px 56px #ffebff, inset 0 0 0 #ffebff'
          },
          '.neumorphism-purple-300-flat-invert-sm': {
          boxShadow : '0 0 0 #897fb1 , inset 7px 7px 14px #897fb1 ,\
          0 0 0 #ffebff, inset -7px -7px 14px #ffebff'
          },
          '.neumorphism-purple-300-flat-invert-md': {
          boxShadow : '0 0 0 #897fb1 , inset 14px 14px 28px #897fb1 ,\
          0 0 0 #ffebff, inset -14px -14px 28px #ffebff'
          },
          '.neumorphism-purple-300-flat-invert-lg': {
          boxShadow : '0 0 0 #897fb1 , inset 28px 28px 56px #897fb1 ,\
          0 0 0 #ffebff, inset -28px -28px 56px #ffebff'
          },
          '.neumorphism-purple-400-flat-sm': {
          boxShadow : '7px 7px 14px #7561af , inset 0 0 0 #7561af ,\
          -7px -7px 14px #d9b5ff, inset 0 0 0 #d9b5ff'
          },
          '.neumorphism-purple-400-flat-md': {
          boxShadow : '14px 14px 28px #7561af , inset 0 0 0 #7561af ,\
          -14px -14px 28px #d9b5ff, inset 0 0 0 #d9b5ff'
          },
          '.neumorphism-purple-400-flat-lg': {
          boxShadow : '28px 28px 56px #7561af , inset 0 0 0 #7561af ,\
          -28px -28px 56px #d9b5ff, inset 0 0 0 #d9b5ff'
          },
          '.neumorphism-purple-400-flat-invert-sm': {
          boxShadow : '0 0 0 #7561af , inset 7px 7px 14px #7561af ,\
          0 0 0 #d9b5ff, inset -7px -7px 14px #d9b5ff'
          },
          '.neumorphism-purple-400-flat-invert-md': {
          boxShadow : '0 0 0 #7561af , inset 14px 14px 28px #7561af ,\
          0 0 0 #d9b5ff, inset -14px -14px 28px #d9b5ff'
          },
          '.neumorphism-purple-400-flat-invert-lg': {
          boxShadow : '0 0 0 #7561af , inset 28px 28px 56px #7561af ,\
          0 0 0 #d9b5ff, inset -28px -28px 56px #d9b5ff'
          },
          '.neumorphism-purple-500-flat-sm': {
          boxShadow : '7px 7px 14px #6140ac , inset 0 0 0 #6140ac ,\
          -7px -7px 14px #b578ff, inset 0 0 0 #b578ff'
          },
          '.neumorphism-purple-500-flat-md': {
          boxShadow : '14px 14px 28px #6140ac , inset 0 0 0 #6140ac ,\
          -14px -14px 28px #b578ff, inset 0 0 0 #b578ff'
          },
          '.neumorphism-purple-500-flat-lg': {
          boxShadow : '28px 28px 56px #6140ac , inset 0 0 0 #6140ac ,\
          -28px -28px 56px #b578ff, inset 0 0 0 #b578ff'
          },
          '.neumorphism-purple-500-flat-invert-sm': {
          boxShadow : '0 0 0 #6140ac , inset 7px 7px 14px #6140ac ,\
          0 0 0 #b578ff, inset -7px -7px 14px #b578ff'
          },
          '.neumorphism-purple-500-flat-invert-md': {
          boxShadow : '0 0 0 #6140ac , inset 14px 14px 28px #6140ac ,\
          0 0 0 #b578ff, inset -14px -14px 28px #b578ff'
          },
          '.neumorphism-purple-500-flat-invert-lg': {
          boxShadow : '0 0 0 #6140ac , inset 28px 28px 56px #6140ac ,\
          0 0 0 #b578ff, inset -28px -28px 56px #b578ff'
          },
          '.neumorphism-purple-600-flat-sm': {
          boxShadow : '7px 7px 14px #5729a6 , inset 0 0 0 #5729a6 ,\
          -7px -7px 14px #a14bff, inset 0 0 0 #a14bff'
          },
          '.neumorphism-purple-600-flat-md': {
          boxShadow : '14px 14px 28px #5729a6 , inset 0 0 0 #5729a6 ,\
          -14px -14px 28px #a14bff, inset 0 0 0 #a14bff'
          },
          '.neumorphism-purple-600-flat-lg': {
          boxShadow : '28px 28px 56px #5729a6 , inset 0 0 0 #5729a6 ,\
          -28px -28px 56px #a14bff, inset 0 0 0 #a14bff'
          },
          '.neumorphism-purple-600-flat-invert-sm': {
          boxShadow : '0 0 0 #5729a6 , inset 7px 7px 14px #5729a6 ,\
          0 0 0 #a14bff, inset -7px -7px 14px #a14bff'
          },
          '.neumorphism-purple-600-flat-invert-md': {
          boxShadow : '0 0 0 #5729a6 , inset 14px 14px 28px #5729a6 ,\
          0 0 0 #a14bff, inset -14px -14px 28px #a14bff'
          },
          '.neumorphism-purple-600-flat-invert-lg': {
          boxShadow : '0 0 0 #5729a6 , inset 28px 28px 56px #5729a6 ,\
          0 0 0 #a14bff, inset -28px -28px 56px #a14bff'
          },
          '.neumorphism-purple-700-flat-sm': {
          boxShadow : '7px 7px 14px #4c1c98 , inset 0 0 0 #4c1c98 ,\
          -7px -7px 14px #8e34ff, inset 0 0 0 #8e34ff'
          },
          '.neumorphism-purple-700-flat-md': {
          boxShadow : '14px 14px 28px #4c1c98 , inset 0 0 0 #4c1c98 ,\
          -14px -14px 28px #8e34ff, inset 0 0 0 #8e34ff'
          },
          '.neumorphism-purple-700-flat-lg': {
          boxShadow : '28px 28px 56px #4c1c98 , inset 0 0 0 #4c1c98 ,\
          -28px -28px 56px #8e34ff, inset 0 0 0 #8e34ff'
          },
          '.neumorphism-purple-700-flat-invert-sm': {
          boxShadow : '0 0 0 #4c1c98 , inset 7px 7px 14px #4c1c98 ,\
          0 0 0 #8e34ff, inset -7px -7px 14px #8e34ff'
          },
          '.neumorphism-purple-700-flat-invert-md': {
          boxShadow : '0 0 0 #4c1c98 , inset 14px 14px 28px #4c1c98 ,\
          0 0 0 #8e34ff, inset -14px -14px 28px #8e34ff'
          },
          '.neumorphism-purple-700-flat-invert-lg': {
          boxShadow : '0 0 0 #4c1c98 , inset 28px 28px 56px #4c1c98 ,\
          0 0 0 #8e34ff, inset -28px -28px 56px #8e34ff'
          },
          '.neumorphism-purple-800-flat-sm': {
          boxShadow : '7px 7px 14px #40177f , inset 0 0 0 #40177f ,\
          -7px -7px 14px #762bed, inset 0 0 0 #762bed'
          },
          '.neumorphism-purple-800-flat-md': {
          boxShadow : '14px 14px 28px #40177f , inset 0 0 0 #40177f ,\
          -14px -14px 28px #762bed, inset 0 0 0 #762bed'
          },
          '.neumorphism-purple-800-flat-lg': {
          boxShadow : '28px 28px 56px #40177f , inset 0 0 0 #40177f ,\
          -28px -28px 56px #762bed, inset 0 0 0 #762bed'
          },
          '.neumorphism-purple-800-flat-invert-sm': {
          boxShadow : '0 0 0 #40177f , inset 7px 7px 14px #40177f ,\
          0 0 0 #762bed, inset -7px -7px 14px #762bed'
          },
          '.neumorphism-purple-800-flat-invert-md': {
          boxShadow : '0 0 0 #40177f , inset 14px 14px 28px #40177f ,\
          0 0 0 #762bed, inset -14px -14px 28px #762bed'
          },
          '.neumorphism-purple-800-flat-invert-lg': {
          boxShadow : '0 0 0 #40177f , inset 28px 28px 56px #40177f ,\
          0 0 0 #762bed, inset -28px -28px 56px #762bed'
          },
          '.neumorphism-purple-900-flat-sm': {
          boxShadow : '7px 7px 14px #351468 , inset 0 0 0 #351468 ,\
          -7px -7px 14px #6326c2, inset 0 0 0 #6326c2'
          },
          '.neumorphism-purple-900-flat-md': {
          boxShadow : '14px 14px 28px #351468 , inset 0 0 0 #351468 ,\
          -14px -14px 28px #6326c2, inset 0 0 0 #6326c2'
          },
          '.neumorphism-purple-900-flat-lg': {
          boxShadow : '28px 28px 56px #351468 , inset 0 0 0 #351468 ,\
          -28px -28px 56px #6326c2, inset 0 0 0 #6326c2'
          },
          '.neumorphism-purple-900-flat-invert-sm': {
          boxShadow : '0 0 0 #351468 , inset 7px 7px 14px #351468 ,\
          0 0 0 #6326c2, inset -7px -7px 14px #6326c2'
          },
          '.neumorphism-purple-900-flat-invert-md': {
          boxShadow : '0 0 0 #351468 , inset 14px 14px 28px #351468 ,\
          0 0 0 #6326c2, inset -14px -14px 28px #6326c2'
          },
          '.neumorphism-purple-900-flat-invert-lg': {
          boxShadow : '0 0 0 #351468 , inset 28px 28px 56px #351468 ,\
          0 0 0 #6326c2, inset -28px -28px 56px #6326c2'
          },
          '.neumorphism-pink-50-flat-sm': {
          boxShadow : '7px 7px 14px #b1a9ae , inset 0 0 0 #b1a9ae ,\
          -7px -7px 14px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-pink-50-flat-md': {
          boxShadow : '14px 14px 28px #b1a9ae , inset 0 0 0 #b1a9ae ,\
          -14px -14px 28px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-pink-50-flat-lg': {
          boxShadow : '28px 28px 56px #b1a9ae , inset 0 0 0 #b1a9ae ,\
          -28px -28px 56px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-pink-50-flat-invert-sm': {
          boxShadow : '0 0 0 #b1a9ae , inset 7px 7px 14px #b1a9ae ,\
          0 0 0 #ffffff, inset -7px -7px 14px #ffffff'
          },
          '.neumorphism-pink-50-flat-invert-md': {
          boxShadow : '0 0 0 #b1a9ae , inset 14px 14px 28px #b1a9ae ,\
          0 0 0 #ffffff, inset -14px -14px 28px #ffffff'
          },
          '.neumorphism-pink-50-flat-invert-lg': {
          boxShadow : '0 0 0 #b1a9ae , inset 28px 28px 56px #b1a9ae ,\
          0 0 0 #ffffff, inset -28px -28px 56px #ffffff'
          },
          '.neumorphism-pink-100-flat-sm': {
          boxShadow : '7px 7px 14px #b0a2aa , inset 0 0 0 #b0a2aa ,\
          -7px -7px 14px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-pink-100-flat-md': {
          boxShadow : '14px 14px 28px #b0a2aa , inset 0 0 0 #b0a2aa ,\
          -14px -14px 28px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-pink-100-flat-lg': {
          boxShadow : '28px 28px 56px #b0a2aa , inset 0 0 0 #b0a2aa ,\
          -28px -28px 56px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-pink-100-flat-invert-sm': {
          boxShadow : '0 0 0 #b0a2aa , inset 7px 7px 14px #b0a2aa ,\
          0 0 0 #ffffff, inset -7px -7px 14px #ffffff'
          },
          '.neumorphism-pink-100-flat-invert-md': {
          boxShadow : '0 0 0 #b0a2aa , inset 14px 14px 28px #b0a2aa ,\
          0 0 0 #ffffff, inset -14px -14px 28px #ffffff'
          },
          '.neumorphism-pink-100-flat-invert-lg': {
          boxShadow : '0 0 0 #b0a2aa , inset 28px 28px 56px #b0a2aa ,\
          0 0 0 #ffffff, inset -28px -28px 56px #ffffff'
          },
          '.neumorphism-pink-200-flat-sm': {
          boxShadow : '7px 7px 14px #b091a2 , inset 0 0 0 #b091a2 ,\
          -7px -7px 14px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-pink-200-flat-md': {
          boxShadow : '14px 14px 28px #b091a2 , inset 0 0 0 #b091a2 ,\
          -14px -14px 28px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-pink-200-flat-lg': {
          boxShadow : '28px 28px 56px #b091a2 , inset 0 0 0 #b091a2 ,\
          -28px -28px 56px #ffffff, inset 0 0 0 #ffffff'
          },
          '.neumorphism-pink-200-flat-invert-sm': {
          boxShadow : '0 0 0 #b091a2 , inset 7px 7px 14px #b091a2 ,\
          0 0 0 #ffffff, inset -7px -7px 14px #ffffff'
          },
          '.neumorphism-pink-200-flat-invert-md': {
          boxShadow : '0 0 0 #b091a2 , inset 14px 14px 28px #b091a2 ,\
          0 0 0 #ffffff, inset -14px -14px 28px #ffffff'
          },
          '.neumorphism-pink-200-flat-invert-lg': {
          boxShadow : '0 0 0 #b091a2 , inset 28px 28px 56px #b091a2 ,\
          0 0 0 #ffffff, inset -28px -28px 56px #ffffff'
          },
          '.neumorphism-pink-300-flat-sm': {
          boxShadow : '7px 7px 14px #ae7694 , inset 0 0 0 #ae7694 ,\
          -7px -7px 14px #ffdaff, inset 0 0 0 #ffdaff'
          },
          '.neumorphism-pink-300-flat-md': {
          boxShadow : '14px 14px 28px #ae7694 , inset 0 0 0 #ae7694 ,\
          -14px -14px 28px #ffdaff, inset 0 0 0 #ffdaff'
          },
          '.neumorphism-pink-300-flat-lg': {
          boxShadow : '28px 28px 56px #ae7694 , inset 0 0 0 #ae7694 ,\
          -28px -28px 56px #ffdaff, inset 0 0 0 #ffdaff'
          },
          '.neumorphism-pink-300-flat-invert-sm': {
          boxShadow : '0 0 0 #ae7694 , inset 7px 7px 14px #ae7694 ,\
          0 0 0 #ffdaff, inset -7px -7px 14px #ffdaff'
          },
          '.neumorphism-pink-300-flat-invert-md': {
          boxShadow : '0 0 0 #ae7694 , inset 14px 14px 28px #ae7694 ,\
          0 0 0 #ffdaff, inset -14px -14px 28px #ffdaff'
          },
          '.neumorphism-pink-300-flat-invert-lg': {
          boxShadow : '0 0 0 #ae7694 , inset 28px 28px 56px #ae7694 ,\
          0 0 0 #ffdaff, inset -28px -28px 56px #ffdaff'
          },
          '.neumorphism-pink-400-flat-sm': {
          boxShadow : '7px 7px 14px #ab507f , inset 0 0 0 #ab507f ,\
          -7px -7px 14px #ff94ed, inset 0 0 0 #ff94ed'
          },
          '.neumorphism-pink-400-flat-md': {
          boxShadow : '14px 14px 28px #ab507f , inset 0 0 0 #ab507f ,\
          -14px -14px 28px #ff94ed, inset 0 0 0 #ff94ed'
          },
          '.neumorphism-pink-400-flat-lg': {
          boxShadow : '28px 28px 56px #ab507f , inset 0 0 0 #ab507f ,\
          -28px -28px 56px #ff94ed, inset 0 0 0 #ff94ed'
          },
          '.neumorphism-pink-400-flat-invert-sm': {
          boxShadow : '0 0 0 #ab507f , inset 7px 7px 14px #ab507f ,\
          0 0 0 #ff94ed, inset -7px -7px 14px #ff94ed'
          },
          '.neumorphism-pink-400-flat-invert-md': {
          boxShadow : '0 0 0 #ab507f , inset 14px 14px 28px #ab507f ,\
          0 0 0 #ff94ed, inset -14px -14px 28px #ff94ed'
          },
          '.neumorphism-pink-400-flat-invert-lg': {
          boxShadow : '0 0 0 #ab507f , inset 28px 28px 56px #ab507f ,\
          0 0 0 #ff94ed, inset -28px -28px 56px #ff94ed'
          },
          '.neumorphism-pink-500-flat-sm': {
          boxShadow : '7px 7px 14px #a5326b , inset 0 0 0 #a5326b ,\
          -7px -7px 14px #ff5ec7, inset 0 0 0 #ff5ec7'
          },
          '.neumorphism-pink-500-flat-md': {
          boxShadow : '14px 14px 28px #a5326b , inset 0 0 0 #a5326b ,\
          -14px -14px 28px #ff5ec7, inset 0 0 0 #ff5ec7'
          },
          '.neumorphism-pink-500-flat-lg': {
          boxShadow : '28px 28px 56px #a5326b , inset 0 0 0 #a5326b ,\
          -28px -28px 56px #ff5ec7, inset 0 0 0 #ff5ec7'
          },
          '.neumorphism-pink-500-flat-invert-sm': {
          boxShadow : '0 0 0 #a5326b , inset 7px 7px 14px #a5326b ,\
          0 0 0 #ff5ec7, inset -7px -7px 14px #ff5ec7'
          },
          '.neumorphism-pink-500-flat-invert-md': {
          boxShadow : '0 0 0 #a5326b , inset 14px 14px 28px #a5326b ,\
          0 0 0 #ff5ec7, inset -14px -14px 28px #ff5ec7'
          },
          '.neumorphism-pink-500-flat-invert-lg': {
          boxShadow : '0 0 0 #a5326b , inset 28px 28px 56px #a5326b ,\
          0 0 0 #ff5ec7, inset -28px -28px 56px #ff5ec7'
          },
          '.neumorphism-pink-600-flat-sm': {
          boxShadow : '7px 7px 14px #991b53 , inset 0 0 0 #991b53 ,\
          -7px -7px 14px #ff339b, inset 0 0 0 #ff339b'
          },
          '.neumorphism-pink-600-flat-md': {
          boxShadow : '14px 14px 28px #991b53 , inset 0 0 0 #991b53 ,\
          -14px -14px 28px #ff339b, inset 0 0 0 #ff339b'
          },
          '.neumorphism-pink-600-flat-lg': {
          boxShadow : '28px 28px 56px #991b53 , inset 0 0 0 #991b53 ,\
          -28px -28px 56px #ff339b, inset 0 0 0 #ff339b'
          },
          '.neumorphism-pink-600-flat-invert-sm': {
          boxShadow : '0 0 0 #991b53 , inset 7px 7px 14px #991b53 ,\
          0 0 0 #ff339b, inset -7px -7px 14px #ff339b'
          },
          '.neumorphism-pink-600-flat-invert-md': {
          boxShadow : '0 0 0 #991b53 , inset 14px 14px 28px #991b53 ,\
          0 0 0 #ff339b, inset -14px -14px 28px #ff339b'
          },
          '.neumorphism-pink-600-flat-invert-lg': {
          boxShadow : '0 0 0 #991b53 , inset 28px 28px 56px #991b53 ,\
          0 0 0 #ff339b, inset -28px -28px 56px #ff339b'
          },
          '.neumorphism-pink-700-flat-sm': {
          boxShadow : '7px 7px 14px #851141 , inset 0 0 0 #851141 ,\
          -7px -7px 14px #f71f79, inset 0 0 0 #f71f79'
          },
          '.neumorphism-pink-700-flat-md': {
          boxShadow : '14px 14px 28px #851141 , inset 0 0 0 #851141 ,\
          -14px -14px 28px #f71f79, inset 0 0 0 #f71f79'
          },
          '.neumorphism-pink-700-flat-lg': {
          boxShadow : '28px 28px 56px #851141 , inset 0 0 0 #851141 ,\
          -28px -28px 56px #f71f79, inset 0 0 0 #f71f79'
          },
          '.neumorphism-pink-700-flat-invert-sm': {
          boxShadow : '0 0 0 #851141 , inset 7px 7px 14px #851141 ,\
          0 0 0 #f71f79, inset -7px -7px 14px #f71f79'
          },
          '.neumorphism-pink-700-flat-invert-md': {
          boxShadow : '0 0 0 #851141 , inset 14px 14px 28px #851141 ,\
          0 0 0 #f71f79, inset -14px -14px 28px #f71f79'
          },
          '.neumorphism-pink-700-flat-invert-lg': {
          boxShadow : '0 0 0 #851141 , inset 28px 28px 56px #851141 ,\
          0 0 0 #f71f79, inset -28px -28px 56px #f71f79'
          },
          '.neumorphism-pink-800-flat-sm': {
          boxShadow : '7px 7px 14px #6e1036 , inset 0 0 0 #6e1036 ,\
          -7px -7px 14px #cc1e64, inset 0 0 0 #cc1e64'
          },
          '.neumorphism-pink-800-flat-md': {
          boxShadow : '14px 14px 28px #6e1036 , inset 0 0 0 #6e1036 ,\
          -14px -14px 28px #cc1e64, inset 0 0 0 #cc1e64'
          },
          '.neumorphism-pink-800-flat-lg': {
          boxShadow : '28px 28px 56px #6e1036 , inset 0 0 0 #6e1036 ,\
          -28px -28px 56px #cc1e64, inset 0 0 0 #cc1e64'
          },
          '.neumorphism-pink-800-flat-invert-sm': {
          boxShadow : '0 0 0 #6e1036 , inset 7px 7px 14px #6e1036 ,\
          0 0 0 #cc1e64, inset -7px -7px 14px #cc1e64'
          },
          '.neumorphism-pink-800-flat-invert-md': {
          boxShadow : '0 0 0 #6e1036 , inset 14px 14px 28px #6e1036 ,\
          0 0 0 #cc1e64, inset -14px -14px 28px #cc1e64'
          },
          '.neumorphism-pink-800-flat-invert-lg': {
          boxShadow : '0 0 0 #6e1036 , inset 28px 28px 56px #6e1036 ,\
          0 0 0 #cc1e64, inset -28px -28px 56px #cc1e64'
          },
          '.neumorphism-pink-900-flat-sm': {
          boxShadow : '7px 7px 14px #5c112f , inset 0 0 0 #5c112f ,\
          -7px -7px 14px #aa1f57 , inset 0 0 0 #aa1f57 '
          },
          '.neumorphism-pink-900-flat-md': {
          boxShadow : '14px 14px 28px #5c112f , inset 0 0 0 #5c112f ,\
          -14px -14px 28px #aa1f57 , inset 0 0 0 #aa1f57 '
          },
          '.neumorphism-pink-900-flat-lg': {
          boxShadow : '28px 28px 56px #5c112f , inset 0 0 0 #5c112f ,\
          -28px -28px 56px #aa1f57 , inset 0 0 0 #aa1f57 '
          },
          '.neumorphism-pink-900-flat-invert-sm': {
          boxShadow : '0 0 0 #5c112f , inset 7px 7px 14px #5c112f ,\
          0 0 0 #aa1f57 , inset -7px -7px 14px #aa1f57 '
          },
          '.neumorphism-pink-900-flat-invert-md': {
          boxShadow : '0 0 0 #5c112f , inset 14px 14px 28px #5c112f ,\
          0 0 0 #aa1f57 , inset -14px -14px 28px #aa1f57 '
          },
          '.neumorphism-pink-900-flat-invert-lg': {
          boxShadow : '0 0 0 #5c112f , inset 28px 28px 56px #5c112f ,\
          0 0 0 #aa1f57 , inset -28px -28px 56px #aa1f57 '
          },
        };
      
        addUtilities(newUtitlities, ['responsive','hover','focus','active']);
    }
};
