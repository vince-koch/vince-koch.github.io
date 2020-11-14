var title = document.querySelector("title").innerText;

var template = `
    <div class="row title">
        <div class="column column-90">
            <a href="/index.html"><img src="/favicon.ico" width="48" height="48"></a>
            <span>Cookie's Crumbs: {{TITLE}}</span>
        </div>
        <div class="column column-10" style="text-align:right;">
            <a style="vertical-align: middle;" href="https://github.com/vince-koch/vince-koch.github.io">source</a>
        </div>
    </div>
`.replace("{{TITLE}}", title);

document.writeln(template);
