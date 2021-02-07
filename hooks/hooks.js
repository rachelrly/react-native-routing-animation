
export function useRandomColor(){
    /*This hook returns a random color*/
    const rand = Math.ceil(Math.random()*8)
    switch(rand){
        case 1: return '#FF5252'
        case 2: return '#303F9F'
        case 3: return '#E040FB'
        case 4: return '#7B1FA2'
        case 5: return '#9575CD'
        case 6: return '#651FFF'
        case 7: return '#880E4F'
        case 8: return '#FF1744'
        default: return '#1A237E'
    }
}