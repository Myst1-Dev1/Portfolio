import './styles.scss';

type animatedProps = {
    letterClass: string;
    strArray: any;
    idx: number;
}

export function AnimatedLetters({letterClass, strArray, idx}: animatedProps) {
    return(
        <span>
            {
                strArray?.map((char:any, i:any) => (
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}