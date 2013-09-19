package com.example.hellogap;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.json.JSONException;
import org.json.JSONObject;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.app.Activity;
import android.os.Bundle;

import com.red_folder.phonegap.plugin.backgroundservice.BackgroundService;

import org.mozilla.javascript.*;


public class MyService extends BackgroundService {
	/*private static final String RHINO_LOG = "var log = Packages.io.vec.ScriptAPI.log;";
	public static void log(String msg) {
	    android.util.Log.i("RHINO_LOG", msg);
	}
	private final static String TAG = MyService.class.getSimpleName();
*/
	private String mHelloTo = "World";

    private String jsstr="function hello(java) { if (typeof log != 'undefined') { log(\"JavaScript say hello to \" + java); log(\"Also, I can access Java object: \" + javaContext);} return { foo: \"bar in JavaScript\" };}";
  // public JSONObject jobj=new JSONObject();

	
	@Override
	protected JSONObject doWork() {
		
		JSONObject result = new JSONObject();
	/*	try{
		jobj.put("hello", jsstr);
		}
		catch(JSONException e){}
		//try {
		 String functionName = "hello";
		 Object[] functionParams = new Object[] { "Android" };
            // Create an execution environment.
           org.mozilla.javascript.Context cx =  org.mozilla.javascript.Context.enter();

            // Turn compilation off.
            cx.setOptimizationLevel(-1);
*/
            try
            {
                // Initialize a variable scope with bindnings for
                // standard objects (Object, Function, etc.)
            /*    Scriptable scope = cx.initStandardObjects();

                // Set a global variable that holds the activity instance.
                ScriptableObject.putProperty(scope, "javaContext",  org.mozilla.javascript.Context.javaToJS(this.getClassLoader(), scope));


                // Evaluate the script.
                Object res= cx.evaluateString(scope, RHINO_LOG + jsstr, "MyService", 1, null);
                Function function = (Function) scope.get(functionName, scope);
                
                NativeObject res1 = (NativeObject) function.call(cx, scope, scope, functionParams);
                
                String foo = (String) org.mozilla.javascript.Context.jsToJava(res1.get("foo", scope), String.class);
                log(foo);*/
    			SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss"); 
    			String now = df.format(new Date(System.currentTimeMillis())); 

    			String msg = "Hello " + this.mHelloTo + " - its currently " + now ;
    			result.put("Message", msg);
    			doit("return \"something\";");
    			Log.d("msg", msg);
    		} catch (JSONException e) {
    			//org.mozilla.javascript.Context.exit();
    			return result;	}
            finally
            {
            //	org.mozilla.javascript.Context.exit();
            	 return result;
            }
			
		
		
		

}

	private static final String RHINO_LOG = "var log = Packages.io.vec.ScriptAPI.log;";
	public static void log(String msg) {
	    android.util.Log.i("RHINO_LOG", msg);
	}

	   
	    
	    
	    void doit(String code)
	    {
	        // Create an execution environment.
	        org.mozilla.javascript.Context cx = org.mozilla.javascript.Context.enter();

	        // Turn compilation off.
	        cx.setOptimizationLevel(-1);

	        try 
	        {
	            // Initialize a variable scope with bindnings for  
	            // standard objects (Object, Function, etc.)
	            Scriptable scope = cx.initStandardObjects();

	            // Set a global variable that holds the activity instance.
	            ScriptableObject.putProperty(
	                scope, "TheActivity", org.mozilla.javascript.Context.javaToJS(this, scope));

	            // Evaluate the script.
	            Object result= cx.evaluateString(scope, code, "doit:", 1, null);    
	            Log.d("resultJavascipt",cx.toString(result));
	            	
	            Log.d("msg","inside rhino routine");
	        } 
	        finally 
	        {
	        	org.mozilla.javascript.Context.exit();
	        }
	    }

	@Override
	protected JSONObject getConfig() {
		JSONObject result = new JSONObject();

		try {
			result.put("HelloTo", this.mHelloTo);
		} catch (JSONException e) {
		}

		return result;
	}

	@Override
	protected void setConfig(JSONObject config) {
		//mofifier pour la prise en chage de mon JSON
		try {
			if (config.has("HelloTo"))
				this.mHelloTo = config.getString("HelloTo");
		} catch (JSONException e) {
		}

	}     

	@Override
	protected JSONObject initialiseLatestResult() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	protected void onTimerEnabled() {
		// TODO Auto-generated method stub

	}

	@Override
	protected void onTimerDisabled() {
		// TODO Auto-generated method stub

	}


}


