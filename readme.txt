1. install node.js 
1.a visit https://nodejs.org/en/; select stable LTS(long time support) build [at the time of this writing stable version is 18.14.2 LTS]; 
    click "download"; wait node.js installer to download to your system
1.b run node.js installer, I do not change any options, except installation folder: I install it into c:\nodejs, your choice might be different
2. build web application: 
2.a open command shell, run rebuild.bat -- it will take a minute or two to download all dependencies for the first time, next rebuild will be quicker
2.b let it run
3. testing, debugging, developing
3.a open your web browser [I use google chrome], visit http://localhost:3000, observe your web application working
3.b hit CTRL+SHIFT+I to start developer tools in your browser; 
3.c observe network communication, select a request, observe request details: request headers\cookies\data\etc, response headers\data\etc 
3.d observe code, 
3.e set a breakpoint in the code, click on WEB GUI button to initiate communication; observe breakpoint in a browser triggereed, 
    see application state, let it go step-by-step or let it run 

























































































































