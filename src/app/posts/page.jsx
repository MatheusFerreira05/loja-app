import Link from "next/link";
import Image from "next/image";

export default function MeuPrimeiroPost(){
    
    return (
        <>
            <div>

                <h1>Meu primeiro POST</h1>
                <div>
                    <figure>
                        <Image src="/img/image (1).png" alt="Imagem 3" width={350} height={250}></Image>
                    </figure>
                    <p><Link href="/">Voltar</Link></p>
                </div>

            </div>
        </>
    )

}