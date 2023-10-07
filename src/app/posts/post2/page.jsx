import Image from "next/image";
import Link from "next/link";

export default function MeuTerceiroPost(){
    
    return (
        <>
            <div>

                <h1>Meu terceiro POST</h1>
                <div>
                <figure>
                        <Image src="/img/image (1).jpg" alt="Imagem 1" width={350} height={250}></Image>
                    </figure>
                    <p><Link href="/">Voltar</Link></p>
                    
                </div>

            </div>
        </>
    )

}