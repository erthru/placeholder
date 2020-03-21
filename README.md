<h2>API PLACEHOLDER</h2>
<h3>Routes:</h3>
<span>Base URL: https://placeholder.erthru.id/</span><br />
<span>Avatar Base URL: https://placeholder.erthru.id/avatar/</span><br />
<span>Thumbnail Base URL: https://placeholder.erthru.id/thumbnail/</span>
<br /><br />
<table border="1px solid #000000" width="900px">
    <tr>
        <th>Endpoint</th>
        <th>Description</th>
        <th>Available Query</th>
    </tr>
    <tr>
        <td>/posts</td>
        <td>Showing posts. Post in pagination (10)</td>
        <td>page (query), limit (query), search(query)</td>
    </tr>
    <tr>
        <td>/posts/{id}</td>
        <td>Showing post detail, comments, author. Comment in pagination (10)</td>
        <td>page (query), limit (query)</td>
    </tr>
    <tr>
        <td>/authors</td>
        <td>Showing authors. Author in pagination (10)</td>
        <td>page (query), limit (query), search(query)</td>
    </tr>
    <tr>
        <td>/authors/{id}</td>
        <td>Showing author detail, posts. Post in pagination (10)</td>
        <td>page (query), limit (query)</td>
    </tr>
</table>
<br />
post with comments example in: https://placeholder.erthru.id/posts/1
<br />
<h3>Run On Your Server:</h3>
<p>
    1. run "git clone https://github.com/erthru/placeholder.git"<br />
    2. run "cd placeholder"<br />
    3. run "npm install"<br />
    4. create a new database with the name "placeholder"<br />
    5. setup "config/config.json"<br />
    6. run "sequelize db:migrate" ("npm install -g sequelize-cli" if you don't have sequelize installed)<br />
    7. run "sequelize db:seed:all"<br />
    8. run "npm start"<br />
    9. placeholder run on port:1001 (you can change the default port on "bin/www")
</p>
