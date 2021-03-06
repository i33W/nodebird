const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

const User = require('../models/user')

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      async (email, password, done) => {
        // done은 passport.authenticate의 콜백 함수
        // done(x, y, z): x-서버 에러, y-로그인 결과값, z-클라이언트 에러
        try {
          const exUser = await User.findOne({ where: { email } })
          if (exUser) {
            const result = await bcrypt.compare(password, exUser.password)
            if (result) {
              done(null, exUser)
            } else {
              done(null, false, { message: '비밀번호가 일치하지 않습니다.' })
            }
          } else {
            done(null, false, { message: '가입되지 않은 회원입니다.' })
          }
        } catch (error) {
          console.error(error)
          done(error)
        }
      },
    ),
  )
}
