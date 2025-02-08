import logoenchanced from "@/public/logo_enhanced.png"


export default function Loader2(){
    return(

        <div className='flex flex-col w-11/12  items-center justify-center w-full h-full' >
         <img alt="logo" src={logoenchanced.src} className="w-1/3 h-1/3  animate-spin" />
        </div>

    )

}