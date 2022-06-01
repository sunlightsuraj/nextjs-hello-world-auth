import { getCsrfToken, getSession, signIn } from 'next-auth/react';


const Login = (props) => {

    return (
        <>
            <div>
                
            </div>
            <div>
                <button onClick={(e) => {
                    e.preventDefault();
                    signIn('facebook')
                }}>
                    Facebook
                </button>

                <button onClick={(e) => {
                    e.preventDefault();
                    signIn('twitter')
                }}>
                    Twitter
                </button>

                <button onClick={(e) => {
                    e.preventDefault();
                    signIn('github')
                }}>Github</button>
            </div>
        </>
    )
}

export default Login;

export async function getServerSideProps(context) {
    const { req } = context
    const session = await getSession({ req })
    
    if(session) {
        return {
            redirect: { destination:  '/' }
        }
    }

    return {
        props: {
            csrfToken: await getCsrfToken(context)
        },
    }
}