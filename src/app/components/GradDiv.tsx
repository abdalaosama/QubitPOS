 
export default function GradDiv({ children, className }: any){
    return ( 
        <div className={`rounded border-2 border-[--border] bg-bg-gradient shadow-md ${className}`}>
            {children}
        </div>
     );
}