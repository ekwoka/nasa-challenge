import { isValidHttpUrl } from "../kwoka"
import { mutateDom } from '../../node_modules/alpinejs/src/mutation.js'

// Responsive Images As a Service

export default function(Alpine){
    const cloudURL = './images/f_auto,q_80,w_{width}/'
    Alpine.directive('rias', (el, { expression }, { effect, evaluateLater }) => {
        let evaluate = evaluateLater(expression)
    
        effect(() => {
            evaluate(value => {
                if(!isValidHttpUrl(value)) return console.log('IMG URL Not Valid')

                let imgBase = cloudURL+value;

                let widths = [180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 1944, 2160, 2376, 2592, 2808, 3024];
                let src = imgBase.replaceAll('{width}', widths[1]);
                let srcset = widths.map(w=>`${imgBase.replaceAll('{width}', w)} ${w}w`).join(',');

                mutateDom(() => {
                    el.src = src
                    el.srcset = srcset
                    el.loading = el.loading || 'lazy';
                })
            })
        })
    })
}