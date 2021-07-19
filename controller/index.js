const axios = require('axios');
const svgCaptcha = require('svg-captcha')

exports.showIndex = async(req,res,next)=> {
   res.render("index.html", {
        username: '张飒',
        fruits: ['12312', 123123, 123123, 123123],
    }); 
}
exports.peopleHome = async (req, res, next) => {
    res.render("people/home.html");
}
exports.login = async (req, res, next) => {
    res.render("login.html");
}

exports.signup = async (req, res, next) => {
    // 1 查询有无重名
    // 2 创建用户
    const {email,password,userName,captcha}= req.body;
    const createUserRes = await axios({
        method: 'get',
        url: 'http://127.0.0.1:8080/api/v1/users',
        params: {
            userName
        }
    });
    console.log(createUserRes);
}
/**
 * 验证码
 */
exports.captcha = async (req, res, next) => {
    const captcha = svgCaptcha.create() // 创建验证码
    // req.session.captcha = {
    //     text: captcha.text, // 验证码文本内容
    //     expires: +new Date() + 1000 * 60 * 10 // 验证码过期时间
    // } // 把验证码存储到会话 Session 中
    res.type('svg') // 设置响应内容类型
    res.status(200).send(captcha.data) // 发送响应结果
}

/**
 * 校验验证码
 */
exports.checkCaptcha = async (req, res, next) => {
    const { captcha } = req.query
    const { captcha: sessionCaptcha } = req.session
    let ret = false

    if (!sessionCaptcha) {
        res.end()
    }

    // 如果验证码没有过期并且用户输入的验证码和 Session 中的验证码一致
    if (+new Date() < sessionCaptcha.expires && captcha.toLowerCase() === sessionCaptcha.text.toLowerCase()) {
        ret = true
    }
    res.status(200).send(ret)
}