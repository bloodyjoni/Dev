package com.example.hellogap;
import org.apache.cordova.DroidGap;

import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.GooglePlayServicesUtil;
<<<<<<< HEAD
import com.plugin.gcm.PushPlugin;
=======
>>>>>>> 53cbea9d5ed0657217021133b87198c8686be3a8

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
<<<<<<< HEAD
        	
	  super.loadUrl("file:///android_asset/www/index.html");
	  Bundle bndl=getIntent().getExtras();
	  if(bndl!=null){
	  if(bndl.containsKey("pushBundle"))
	  { handleGCMMessagesLaunch(bndl);}
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

    

=======
	  super.loadUrl("file:///android_asset/www/index.html");
	  }
	  
    }
	@Override
	protected void onResume() {
		super.onResume();
		checkPlayServices();
	}

    
  /*  public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }
	*/
>>>>>>> 53cbea9d5ed0657217021133b87198c8686be3a8
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
<<<<<<< HEAD
    private void handleGCMMessagesLaunch(Bundle SavedInstance){
    	Log.d("MainActivity","inside MainActivityHandlerGCM");
    	PushPlugin.sendExtras(SavedInstance);

    }
=======
>>>>>>> 53cbea9d5ed0657217021133b87198c8686be3a8
}
