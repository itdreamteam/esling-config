module.exports = {
    rules : {
        // enforce one true comma style
        'comma-style'  : ['error', 'last'],
        // require trailing commas in multiline object literals
        'comma-dangle' : [
            'error', {
                arrays    : ['error', 'never'],
                objects   : ['error', 'never'],
                imports   : ['error', 'never'],
                exports   : ['error', 'never'],
                functions : ['error', 'never']
            }
        ],
        // require or disallow use of semicolons instead of ASI
        semi           : ['error', 'always'],
        // enforce spacing before and after semicolons
        'semi-spacing' : ['error', { before : false, after : true }]
    }
};
