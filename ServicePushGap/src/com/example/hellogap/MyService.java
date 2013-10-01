package com.example.hellogap;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.Context;
import android.content.SharedPreferences;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager.NameNotFoundException;
import android.util.Log;
import com.google.android.gms.gcm.GoogleCloudMessaging;
import com.red_folder.phonegap.plugin.backgroundservice.BackgroundService;


public class MyService extends BackgroundService {

	private String mHelloTo = "World";
	final String EXTRA_MESSAGE = "message";
	final String PROPERTY_REG_ID = "registration_id";
	
	final String PROPERTY_APP_VERSION = "appVersion";
	final int PLAY_SERVICES_RESOLUTION_REQUEST = 9000;
	GoogleCloudMessaging gcm;
	String regid;
	/**
	 * Substitute you own sender ID here. This is the project number you got
	 * from the API Console, as described in "Getting Started."
	 */
	String SENDER_ID = "447745035223";
	String ADD_TOKEN_SCRIPT ="http://www.proyectored.com.ar/mobile/addtoken.php?token=";
	String DELETE_TOKEN_SCRIPT =  "http://www.proyectored.com.ar/mobile/deletetoken.php?token=";
	
	/**
	 * Tag used on log messages.
	 */
	static final String TAG = "GCMREGISTRATION";
	@Override
	protected JSONObject doWork() {





		String regid="";

		JSONObject result = new JSONObject();
		gcm = GoogleCloudMessaging.getInstance(this);
		try {
			regid=gcm.register(SENDER_ID);
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		//regid = gcm.toString();
		Log.d(TAG,regid);

		// connection part
		URL url = null;
		try {
			url = new URL("http://www.proyectored.com.ar/mobile/addtoken.php?token="+regid);
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			Log.d(TAG,"InvalidURL");
			e.printStackTrace();
		}
		HttpURLConnection urlConnection = null;
		try {
			urlConnection = (HttpURLConnection) url.openConnection();

			InputStream in = new BufferedInputStream(urlConnection.getInputStream());
			InputStreamReader reader= new InputStreamReader(in);
			Log.d("urlconnection return",reader.toString());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		finally {
			urlConnection.disconnect();
		}

		SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss"); 
		String now = df.format(new Date(System.currentTimeMillis())); 

		String msg = "Hello " + this.mHelloTo + " - its currently " + now ;
		try {
			result.put("Message", msg);
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		Log.d("msg", msg);

		
		return result;





	}

	/**
	 * Gets the current registration ID for application on GCM service.
	 * <p>
	 * If result is empty, the app needs to register.
	 *
	 * @return registration ID, or empty string if there is no existing
	 *         registration ID.
	 */
	private String getRegistrationId(Context context) {
		final SharedPreferences prefs = getGCMPreferences(context);
		String registrationId = prefs.getString(PROPERTY_REG_ID, "");
		if (registrationId == null) {
			Log.i(TAG, "Registration not found.");
			return "";
		}
		// Check if app was updated; if so, it must clear the registration ID
		// since the existing regID is not guaranteed to work with the new
		// app version.
		int registeredVersion = prefs.getInt(PROPERTY_APP_VERSION, Integer.MIN_VALUE);
		int currentVersion = getAppVersion(context);
		if (registeredVersion != currentVersion) {
			Log.i(TAG, "App version changed.");
			return "";
		}
		return registrationId;
	}

	private SharedPreferences getGCMPreferences(Context context) {
		// This sample app persists the registration ID in shared preferences, but
		// how you store the regID in your app is up to you.
		return getSharedPreferences(MyService.class.getSimpleName(),
				Context.MODE_PRIVATE);
	}
	/**
	 * @return Application's version code from the {@code PackageManager}.
	 */
	private static int getAppVersion(Context context) {
		try {
			PackageInfo packageInfo = context.getPackageManager()
					.getPackageInfo(context.getPackageName(), 0);
			return packageInfo.versionCode;
		} catch (NameNotFoundException e) {
			// should never happen
			throw new RuntimeException("Could not get package name: " + e);
		}
	}

	@Override
	protected void setConfig(JSONObject config) {
		//mofifier pour la prise en chage de mon JSON
		try {
			if (config.has("addTokenScript"))
				this.ADD_TOKEN_SCRIPT = config.getString("addTokenScript");
			if (config.has("deleteTokenScript"))
				this.DELETE_TOKEN_SCRIPT = config.getString("deleteTokenScript");
			if (config.has("senderID"))
				this.SENDER_ID = config.getString("senderID");
			
		} catch (Exception e) {
			Log.d(TAG,"Set Config Error"+ e.toString());
		}
		// launch the service
		doWork();

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


	@Override
	protected JSONObject getConfig() {
		JSONObject result = new JSONObject();

		try {
			result.put("HelloTo", this.mHelloTo);
		} catch (JSONException e) {
		}

		return result;
	}
	/*public static boolean unregisterService(){
		if(gcm != null){
			
			
			// connection part
			URL url = null;
			try {
				url = new URL("http://www.proyectored.com.ar/mobile/deletetoken.php?token="+regid);
			} catch (MalformedURLException e) {
				// TODO Auto-generated catch block
				Log.d(TAG,"InvalidURL");
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
			return true;
		}
		else return false;
	}
*/
}


