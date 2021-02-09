
export function useNavigationRoute(route){
    switch(route){
        case 'Home': return {
            next: 'AfterHome',
            color: '#9575CD'
        }
        case 'AfterHome': return {
            next: 'Next',
            color: '#303F9F'
        }
        case 'Next': return {
            next: 'AfterNext',
            color:'#E040FB'
        }
        case 'AfterNext': return {
            next: 'Home',
            color:'#7B1FA2'
        }
    }
}