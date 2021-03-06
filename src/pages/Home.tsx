import { useHistory } from 'react-router';

import illustration from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIcon from '../assets/images/google-icon.svg';

import { Button } from '../components/ButtonComp';
import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss'



export function Home(){

    const history = useHistory();

    const {sigInWithGoogle, user} = useAuth();

    async function handleCreateRoom(){

        if(!user){
            await sigInWithGoogle()
        }

        history.push('/rooms/new')
    }

    return(
        <>
            <div id="pageAuth">
                <aside>
                    <img src={illustration} alt="ilustração simbolizando perguntas e respostas" />
                    <strong>Crie salas de Q&amp;A ao-vivo</strong>
                    <p>Tire as dúvidas da sua audiência em tempo-real</p>
                </aside>
                <main>
                    <div className="mainContent">
                        <img src={logoImg} alt="Letmeask" />
                        <button onClick={handleCreateRoom} className="createRoom">
                            <img src={googleIcon} alt="Logo do google" />
                            Crie sua sala com o Google
                        </button>
                        <div className="separator">ou entre em uma sala</div>
                        <form>
                            <input type="text" placeholder="Digite o código da sala" />
                            <Button type="submit">Entrar na sala</Button>
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
}