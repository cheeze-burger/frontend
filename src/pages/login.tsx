import { signIn, signOut, useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import Layout from '../components/layout';

export default function Login() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  useEffect(() => {
    console.log(process.env.KAKAO_ID);
  }, []);
  return (
    <Layout seoTitle="로그인">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0"></div>
        <div>
          <div className="text-xl font-medium text-black">Login</div>
          <div className="text-slate-500">로그인 해주세요</div>
          {!session ? (
            <ul>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    signIn('kakao');
                  }}
                >
                  카카오 로그인
                </a>
              </li>
            </ul>
          ) : (
            <div>
              로그인 됨.
              <ul>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      signIn('kakao');
                    }}
                  >
                    로그아웃
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
