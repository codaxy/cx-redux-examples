import {HtmlElement, Link, Button} from 'cx/widgets';
import {ContentPlaceholder} from 'cx/ui';
import Controller from "./Controller";

export default <cx>
   <div
      controller={Controller}
      class={{
         "layout": true,
         "nav": {bind: "layout.aside.open"}
      }}
   >
      <main class="main" onMouseDownCapture="onMainClick">
         <ContentPlaceholder />
      </main>
      <header class="header">
         <i
            class={{
               hamburger: true,
               open: {bind: 'layout.aside.open'}
            }}
            onClick={(e, {store}) => {
               store.toggle('layout.aside.open');
            }}
         />
         <ContentPlaceholder name="header"/>
      </header>
      <aside class="aside">
         <h1>Cx - Redux</h1>

         <dl>
            <dt>
               Examples
            </dt>
            <dd>
               <Link href="~/todos" url:bind="url">
                  TODOs
               </Link>
            </dd>
         </dl>
      </aside>
   </div>
</cx>
