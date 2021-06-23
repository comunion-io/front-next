import { GITHUB_CLIENT_ID } from '@/constants/oauth'
import { randomStr } from '@comunion/utils'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GithubOauth',
  setup() {
    const isLocal = process.env.NODE_ENV === 'development'
    const state = randomStr()
    return () => (
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=http://localhost:3000/auth/github/callback&state=e${
          isLocal ? '0' : '1'
        }${state}`}
      >
        Github登录
      </a>
    )
  },
})
