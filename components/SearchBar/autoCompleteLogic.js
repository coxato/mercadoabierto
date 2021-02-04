import autoComplete from '@tarekraafat/autocomplete.js/dist/js/autoComplete';

function initAutoComplete(selectionCallback) {
    new autoComplete({
        selector: '#autoComplete-search', 
        
        data: {
            src: async function () {
                // Loading placeholder text
                const data = ['one', 'two', 'three']
                return data;
            },
        },
        trigger: {
            event: ["input", "focus"]
        },
        searchEngine: "strict",
        highlight: true,
        maxResults: 6,
        onSelection: (feedback) => {
            selectionCallback(feedback.selection.value);
        }
        
    }); 
}

export default initAutoComplete;