package com.example.hellogap;
import org.apache.cordova.DroidGap;

import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.GooglePlayServicesUtil;

import com.plugin.gcm.PushPlugin;


import android.os.Bundle;
import android.app.Activity;
import android.util.Log;
import android.view.Menu;



public class MainActivity extends DroidGap {
	private final static int PLAY_SERVICES_RESOLUTION_REQUEST = 9000;
    @Override
	public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
       // setContentView(R.layout.activity_main);
        if (checkPlayServices()) {

        	
	  super.loadUrl("file:///android_asset/www/index.html");
	  Bundle bndl=getIntent().getExtras();
	  if(bndl!=null){
	  if(bndl.containsKey("pushBundle"))
	  { handleGCMMessagesLaunch(bndl.getBundle("pushBundle"));}
	  }
        }
    }
	protected void onResume() {
		super.onResume();
		checkPlayServices();
		Bundle bndl=getIntent().getExtras();
		  if(bndl!=null){
		  if(bndl.containsKey("pushBundle"))
		  { handleGCMMessagesLaunch(bndl.getBundle("pushBundle"));}
		  }
	        
		
	}

    


    private boolean checkPlayServices() {
    int resultCode = GooglePlayServicesUtil.isGooglePlayServicesAvailable(this);
    if (resultCode != ConnectionResult.SUCCESS) {
        if (GooglePlayServicesUtil.isUserRecoverableError(resultCode)) {
            GooglePlayServicesUtil.getErrorDialog(resultCode, this,
                    PLAY_SERVICES_RESOLUTION_REQUEST).show();
        } else {
            Log.i(TAG, "This device is not supported.");
            finish();
        }
        return false;
    }
    return true;
}

    private void handleGCMMessagesLaunch(Bundle SavedInstance){
    	Log.d("MainActivity","inside MainActivityHandlerGCM");
    	PushPlugin.sendExtras(SavedInstance);

    }

}
