<h2>Placeholder API</h2>
<h3>Routes:</h3>
<span>Base: https://placeholder.erthru.id</span>
<br />
<table border="1px solid #000000" width="900px">
    <tr>
        <th>Endpoint</th>
        <th>Description</th>
        <th>Available Query</th>
    </tr>
    <tr>
        <td>/post</td>
        <td>Showing posts. Post in pagination (10)</td>
        <td>page (query), limit (query), search(query)</td>
    </tr>
    <tr>
        <td>/post/{id}</td>
        <td>Showing post detail, comments, author. Comment in pagination (10)</td>
        <td>page (query), limit (query)</td>
    </tr>
    <tr>
        <td>/author/{id}</td>
        <td>Showing author detail, posts. Post in pagination (10)</td>
        <td>page (query), limit (query)</td>
    </tr>
</table>
<br />
<h3>Run On Your Server:</h3>
<p>
    1. run git clone https://github.com/erthru/placeholder.git<br />
    2. run cd placeholder<br />
    3. run npm run install<br />
    4. create a new database with the name "placeholder"<br />
    5. setup config/config.json<br />
    6. run sequelize db:migrate<br />
    7. run sequelize db:seed:all<br />
    8. run npm start<br />
    9. placeholder run on port:3000
</p>