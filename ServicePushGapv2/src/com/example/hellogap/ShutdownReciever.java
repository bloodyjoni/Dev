/**
 * 
 */
package com.example.hellogap;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

/**
 * @author Matilde
 *
 */
public class ShutdownReciever extends BroadcastReceiver {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

	@Override
	public void onReceive(Context arg0, Intent arg1) {
		
		Log.d("ShutDownReceiver","insideshutdwnreceiver");
	}

}
