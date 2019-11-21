$(() => {
    
    // Submit a form
    $('#search-form').submit((e) => {
        e.preventDefault();
        const searchTerm = $('#search-input').val();
        getRequest(searchTerm);
    });

    function getRequest(input) {
        const url = 'https://api.giphy.com/v1/gifs/search';
        const parameters = {
            api_key: 'UvA5nncJMFwu954sVl95916VkqY96IDX',
            q: input
        };

        $.getJSON(url, parameters, (response) => {
            
            showGif(response.data);
        });
    }

    function showGif(response) {
        $.each(response, (i, gif) => {
            console.log(gif);
            const template = `
            <article class="image">
                <h3>${gif.title}</h3>
                <img src="${gif.images.downsized_medium.url}">
            </article>`;
            $('#results').append(template);
        });
    }
});