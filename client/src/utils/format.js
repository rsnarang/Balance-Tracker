export function number_commas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
}