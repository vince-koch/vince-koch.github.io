# Enable tracking in ASP.Net

Add the following configuration to your `Web.config` file.

    <configuration>
        <system.web>
            <trace enabled="true" pageOutput="false" requestLimit="40" localOnly="false" />
        </system.web>
    </configuration>

You can then navigate to `Trace.axd` in the root of your application.
            
For example, if the URL for your application is http://localhost/SampleApplication, navigate to http://localhost/SampleApplication/trace.axd to view the trace information for that application.