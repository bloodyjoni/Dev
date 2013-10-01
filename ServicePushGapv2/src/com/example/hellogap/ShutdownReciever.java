/**
 * 
 */
package com.example.hellogap;

<<<<<<< HEAD
import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

import com.google.android.gms.gcm.GoogleCloudMessaging;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.AsyncTask;
=======
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
>>>>>>> 53cbea9d5ed0657217021133b87198c8686be3a8
import android.util.Log;

/**
 * @author Matilde
 *
 */
public class ShutdownReciever extends BroadcastReceiver {

	/**
	 * @param args
	 */
<<<<<<< HEAD
	
	public static void main() {
		// TODO Auto-generated method stub
		
=======
	public static void main(String[] args) {
		// TODO Auto-generated method stub

>>>>>>> 53cbea9d5ed0657217021133b87198c8686be3a8
	}

	@Override
	public void onReceive(Context arg0, Intent arg1) {
		
<<<<<<< HEAD
		
		unregisterBackground();
	
			
	
		
	}
	private void unregisterBackground() {
	    new AsyncTask<Object, Object, Object>() {
	        protected String doInBackground(Object... params) {
	        	GoogleCloudMessaging gcm = null;			
	        	SharedPreferences shrprfs= ApplicationContext.getContext().getSharedPreferences("SERVPUSH_PREFS", 0);
	    		
	    		String regid = shrprfs.getString("Regid", "regid missing");
	    		
				
	        	String msg = "";
	         
	                if (gcm == null) 
	                    gcm = GoogleCloudMessaging.getInstance(ApplicationContext.getContext());
	                	try {
	                		gcm.register("447745035223");
							gcm.unregister();
						} catch (IOException e) {
							// TODO Auto-generated catch block
							Log.d("ShutdownunregistrationUnregister","unregisterError");
							e.printStackTrace();
						}
	                	
	                	URL url = null;
	            		try {
	            			url = new URL("http://www.proyectored.com.ar/mobile/deletetoken.php?token="+regid);
	            		} catch (MalformedURLException e) {
	            			// TODO Auto-generated catch block
	            			Log.d("Shutdownunregistration","InvalidURL");
	            			e.printStackTrace();
	            		}
	            		HttpURLConnection urlConnection = null;
	            		try {
	            			urlConnection = (HttpURLConnection) url.openConnection();

	            			InputStream in = new BufferedInputStream(urlConnection.getInputStream());
	            			InputStreamReader reader= new InputStreamReader(in);
	            			Log.d("urlconnection return",reader.toString());
	            		} catch (Exception e) {
	            			// TODO Auto-generated catch block
	            			e.printStackTrace();
	            			Log.d("ShutdownServiceExecp",e.toString());
	            		}

	            		finally {
	            			urlConnection.disconnect();
	            		}
	            		Log.d("ShutDownReceiver","insideshutdwnreceiver");
	            		return regid;
	        }
	    }.execute(null, null, null);
	}
=======
		Log.d("ShutDownReceiver","insideshutdwnreceiver");
	}

>>>>>>> 53cbea9d5ed0657217021133b87198c8686be3a8
}
