/**
 * Created by Victoria on 3/2/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {moduleHeader} from "../../components/module-header/module-header";

@Component({
    selector: 'comment-module',
    templateUrl: './app/modules/comment/comment.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader],
    providers: [],
})
export class CommentModule implements OnInit{
    module_title: string;

    ngOnInit(){
        var script = document.createElement("script");
        script.innerHTML =`
            /**
             * RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
             * LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
             */
            /*
            var disqus_config = function () {
            this.page.url = PAGE_URL; // Replace PAGE_URL with your page's canonical URL variable
            this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
            };
            */
            (function() { // DON'T EDIT BELOW THIS LINE
                var d = document, s = d.createElement('script');

                s.src = '//myjoyfulhome.disqus.com/embed.js';

                s.setAttribute('data-timestamp', +new Date());
                (d.head || d.body).appendChild(s);
            })();
        `
        document.body.appendChild(script);
        this.module_title = 'Share Your Comments With Us';
    }
}
