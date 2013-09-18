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

	private final static String TAG = MyService.class.getSimpleName();

	private String mHelloTo = "World";

    private String jsstr="console.log(\"var text = 'Hello Android!\\\\nThis is JavaScript in action!';\\n\")";


	@SuppressWarnings("finally")
	@Override
	protected JSONObject doWork() {
		JSONObject result = new JSONObject();

		//try {
            // Create an execution environment.
            org.mozilla.javascript.Context cx =  org.mozilla.javascript.Context.enter();

            // Turn compilation off.
            cx.setOptimizationLevel(-1);

            try
            {
                // Initialize a variable scope with bindnings for
                // standard objects (Object, Function, etc.)
                Scriptable scope = cx.initStandardObjects();

                // Set a global variable that holds the activity instance.
                ScriptableObject.putProperty(
                        scope, "TheActivity",  org.mozilla.javascript.Context.javaToJS(this, scope));

                // Evaluate the script.
                cx.evaluateString(scope, jsstr, "doti:", 1, null);
            	
    			SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss"); 
    			String now = df.format(new Date(System.currentTimeMillis())); 

    			String msg = "Hello " + this.mHelloTo + " - its currently " + now;
    			result.put("Message", msg);

    			Log.d(TAG, msg);
    		} catch (JSONException e) {

    			return result;	}
            finally
            {
            	 org.mozilla.javascript.Context.exit();
            	 return result;
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


