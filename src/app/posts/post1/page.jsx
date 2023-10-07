import Link from "next/link";
import Image from "next/image";

export default function MeuSegundoPost(){
    
    return (
        <>
            <div>

                <h1>Meu segundo POST</h1>
                <div>
                    <figure>
                        <Image src="/img/image (2).png" alt="Imagem 2" width={350} height={250}></Image>
                    </figure>
                    <p><Link href="/">Voltar</Link></p>
                </div>

            </div>
        </>
    )

}