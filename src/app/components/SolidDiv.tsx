 
export default function SolidDiv({ children, className }: any){
    return ( 
        <div className={`rounded border-2 border-[--border] bg-primary shadow-md ${className}`}>
            {children}
        </div>
     );
}