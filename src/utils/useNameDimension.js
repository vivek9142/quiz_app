import useDimensions from './screenDimension';
import queries from '../constants/mediaQueries';

function useNameDimension(){
    const dimension = useDimensions();

    if(dimension.width <= queries.xs){
        return 'xs'
    } else if(dimension.width >= queries.xs && dimension.width<= queries.md){
        return 'sm'
    } else if(dimension.width >= queries.md && dimension.width<= queries.lg){
        return 'md'
    }else if(dimension.width >= queries.lg && dimension.width<= queries.xl){
        return 'lg'
    } else if(dimension.width >= queries.xl){
        return 'xl'
    }
}

export default useNameDimension;


/* Extra small devices (phones, 600px and down) */
//@media only screen and (max-width: 600px) {...}
/* Small devices (portrait tablets and large phones, 600px and up) */
//@media only screen and (min-width: 600px) {...}
/* Medium devices (landscape tablets, 768px and up) */
///@media only screen and (min-width: 768px) {...}
/* Large devices (laptops/desktops, 992px and up) */
//@media only screen and (min-width: 992px) {...}
/* Extra large devices (large laptops and desktops, 1200px and up) */
//@media only screen and (min-width: 1200px) {...}