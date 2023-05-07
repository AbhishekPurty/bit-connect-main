import { useRouter } from "next/router";
import Image from "next/image";

const SidebarLogo = () => {
    const router = useRouter();

    return (
            <div 
                onClick={() => router.push('/')}
                className="
                    rounded-full
                    h-21
                    w-21
                    p-4
                    flex
                    items-center
                    justify-center
                    hover:bg-opacity-10
                    cursor-pointer
                    transition
                    
            ">
                <Image
                    src="/logo.png"
                    alt="Your Logo" 
                    width={200} 
                    height={200} 
                    style={{ objectFit :'contain'}} 
                    priority={true} 
                />
            </div>
    ); 
}

export default SidebarLogo;
