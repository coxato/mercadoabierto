import autoComplete from '@tarekraafat/autocomplete.js/dist/js/autoComplete';
// requests
import productRequests from '../../requests/products';

const maxResults = 6;

function initAutoComplete(selectionCallback) {
    new autoComplete({
        selector: '#autoComplete-search', 
        
        data: {
            src: async function () {
                const text = document.getElementById("autoComplete-search").value;

                const data = await productRequests.searchBarSuggestions(text, maxResults);

                return data;
            },

            Cache: false
        },
        trigger: {
            event: ["input", "focus"]
        },
        searchEngine: "strict",
        highlight: true,
        maxResults,
        onSelection: (feedback) => {
            selectionCallback(feedback.selection.value);
        },
        threshold: 3
        
    }); 
}

export default initAutoComplete;