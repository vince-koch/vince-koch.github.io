* ### Configure Fiddler
  Open Fiddler, go to Tools > Fiddler Options > Connections then change the portlisted within the "Fiddler listens on port" setting to 8888.

* ### Add the following to your Web.config (configuration/system.net)
        <system.net>
            <defaultProxy enabled="true">
                <proxy proxyaddress="http://127.0.0.1:8888" bypassonlocal="False" />
            </defaultProxy>
        </system.net>

* ### If things aren't working make sure the Fiddler root certificate has been trusted
  This only needs to be done once per machine.  If you fail to do this you will  likely see the _CONNECT_ requests, but nothing else over a htts connection
