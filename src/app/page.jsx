import Link from "next/link";

export default function Home(){
  return(
    <div>
      <h1>Home</h1>
      <div>
        <p><Link href="/posts">Meu Post...</Link></p>
      </div>
      <div>
        <p><Link href="/posts/post1">Meu Segundo Post...</Link></p>
      </div>
      <div>
        <p><Link href="/posts/post2">Meu Terceiro Post...</Link></p>
      </div>
    </div>
  )
}