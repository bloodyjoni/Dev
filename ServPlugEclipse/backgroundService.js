


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Cordova-Plugin-BackgroundService/2.9.0/backgroundService-2.9.0.js at master · Red-Folder/Cordova-Plugin-BackgroundService</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe115-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (2012-05-25, TCS patched 2012-05-27, GitHub v1.0.32) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="xhr-socket" href="/_sockets" />
    
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="4532562" name="octolytics-actor-id" /><meta content="bloodyjoni" name="octolytics-actor-login" /><meta content="1b2c8f2fa217a14556e5c6962455ed8e08c255215fe1beba8dc05df0fba7093d" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="FQbFwqDqH9qbZ2Tb+fSE7QuoPaLS2gP0Mt1iIPWR+ks=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-97020e63389b457c7059f1557de29634b92d5217.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-672985c1cda50a743fddd61eda75c37c004fb1c8.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-f86a2975a82dceee28e5afe598d1ebbfd7109d79.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-8cc4f0e1b4986a3339918c827dc372f9e2fd8c1b.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="bb42f0a86fe971c74563eb33a1b88394">

        <link data-pjax-transient rel='permalink' href='/Red-Folder/Cordova-Plugin-BackgroundService/blob/5e735cd8f0342c3f46d49caf1617f88a73b4c7b9/2.9.0/backgroundService-2.9.0.js'>
  <meta property="og:title" content="Cordova-Plugin-BackgroundService"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/Red-Folder/Cordova-Plugin-BackgroundService"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="Cordova-Plugin-BackgroundService - BackroundService plugin for use with Cordova (PhoneGap)"/>

  <meta name="description" content="Cordova-Plugin-BackgroundService - BackroundService plugin for use with Cordova (PhoneGap)" />

  <meta content="2298738" name="octolytics-dimension-user_id" /><meta content="Red-Folder" name="octolytics-dimension-user_login" /><meta content="7548476" name="octolytics-dimension-repository_id" /><meta content="Red-Folder/Cordova-Plugin-BackgroundService" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="7548476" name="octolytics-dimension-repository_network_root_id" /><meta content="Red-Folder/Cordova-Plugin-BackgroundService" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/Red-Folder/Cordova-Plugin-BackgroundService/commits/master.atom" rel="alternate" title="Recent Commits to Cordova-Plugin-BackgroundService:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public env-production ">

    <div class="wrapper">
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    <div class="divider-vertical"></div>

    
    <a href="/notifications" class="notification-indicator tooltipped downwards" data-gotokey="n" title="You have no unread notifications">
        <span class="mail-status all-read"></span>
</a>    <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="bloodyjoni"
      data-repo="Red-Folder/Cordova-Plugin-BackgroundService"
      data-branch="master"
      data-sha="310739615be6201c92b8fb281094102466003d75"
  >

    <input type="hidden" name="nwo" value="Red-Folder/Cordova-Plugin-BackgroundService" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/bloodyjoni" class="name">
        <img height="20" src="https://1.gravatar.com/avatar/a4bf8894c1bcc0859d96687539563ddc?d=https%3A%2F%2Fidenticons.github.com%2F7dce390af7b982299eb365df8c3d1325.png&amp;s=140" width="20" /> bloodyjoni
      </a>
    </li>

      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo" aria-label="Create a new repo">
          <span class="octicon octicon-repo-create"></span>
        </a>
      </li>

      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          aria-label="Account settings (You have no verified emails)"
          title="Account settings (You have no verified emails)">
          <span class="octicon octicon-tools"></span>
        </a>
          <span class="settings-warning">!</span>
      </li>
      <li>
        <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
          <span class="octicon octicon-log-out"></span>
        </a>
      </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="Red-Folder/Cordova-Plugin-BackgroundService">This repository</span>
    </li>
    <li>
      <a href="/Red-Folder/Cordova-Plugin-BackgroundService/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
</ul>

</div>


    
  </div>
</div>

      

      

<div class="flash-global flash-warn">
<div class="container">

    <h2>
      You don't have any verified emails.  We recommend <a href="https://github.com/settings/emails">verifying</a> at least one email.
    </h2>
    <p>
      Email verification helps our support team help you in case you have any email issues or lose your password.
    </p>












</div>
</div>



          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="FQbFwqDqH9qbZ2Tb+fSE7QuoPaLS2gP0Mt1iIPWR+ks=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="7548476" />

    <div class="select-menu js-menu-container js-select-menu">
        <a class="social-count js-social-count" href="/Red-Folder/Cordova-Plugin-BackgroundService/watchers">
          6
        </a>
      <span class="minibutton select-menu-button with-count js-menu-target">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  
<div class="js-toggler-container js-social-container starring-container ">
  <a href="/Red-Folder/Cordova-Plugin-BackgroundService/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
  </a>
  <a href="/Red-Folder/Cordova-Plugin-BackgroundService/star" class="minibutton with-count js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star"></span><span class="text">Star</span>
  </a>
  <a class="social-count js-social-count" href="/Red-Folder/Cordova-Plugin-BackgroundService/stargazers">32</a>
</div>

  </li>


        <li>
          <a href="/Red-Folder/Cordova-Plugin-BackgroundService/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/Red-Folder/Cordova-Plugin-BackgroundService/network" class="social-count">29</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/Red-Folder" class="url fn" itemprop="url" rel="author"><span itemprop="title">Red-Folder</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/Red-Folder/Cordova-Plugin-BackgroundService" class="js-current-repository js-repo-home-link">Cordova-Plugin-BackgroundService</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/Red-Folder/Cordova-Plugin-BackgroundService" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /Red-Folder/Cordova-Plugin-BackgroundService">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/Red-Folder/Cordova-Plugin-BackgroundService/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /Red-Folder/Cordova-Plugin-BackgroundService/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>2</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/Red-Folder/Cordova-Plugin-BackgroundService/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /Red-Folder/Cordova-Plugin-BackgroundService/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/Red-Folder/Cordova-Plugin-BackgroundService/wiki" aria-label="Wiki" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_wiki /Red-Folder/Cordova-Plugin-BackgroundService/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/Red-Folder/Cordova-Plugin-BackgroundService/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /Red-Folder/Cordova-Plugin-BackgroundService/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/Red-Folder/Cordova-Plugin-BackgroundService/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /Red-Folder/Cordova-Plugin-BackgroundService/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/Red-Folder/Cordova-Plugin-BackgroundService/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /Red-Folder/Cordova-Plugin-BackgroundService/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/Red-Folder/Cordova-Plugin-BackgroundService.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/Red-Folder/Cordova-Plugin-BackgroundService.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="git@github.com:Red-Folder/Cordova-Plugin-BackgroundService.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:Red-Folder/Cordova-Plugin-BackgroundService.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/Red-Folder/Cordova-Plugin-BackgroundService" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/Red-Folder/Cordova-Plugin-BackgroundService" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>



<p class="clone-options">You can clone with
    <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
    <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
    <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>,
  and <a href="https://help.github.com/articles/which-remote-url-should-i-use">other methods.</a>
</p>


  <a href="github-windows://openRepo/https://github.com/Red-Folder/Cordova-Plugin-BackgroundService" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/Red-Folder/Cordova-Plugin-BackgroundService/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:fe4675e1df0e454c304103eb1159fa49 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:fe4675e1df0e454c304103eb1159fa49 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/Red-Folder/Cordova-Plugin-BackgroundService/find/master" data-pjax data-hotkey="t" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master" role="button" aria-label="Switch branches or tags">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Red-Folder/Cordova-Plugin-BackgroundService/blob/master/2.9.0/backgroundService-2.9.0.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" data-skip-pjax="true" rel="nofollow" title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/Red-Folder/Cordova-Plugin-BackgroundService" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">Cordova-Plugin-BackgroundService</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/Red-Folder/Cordova-Plugin-BackgroundService/tree/master/2.9.0" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">2.9.0</span></a></span><span class="separator"> / </span><strong class="final-path">backgroundService-2.9.0.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="2.9.0/backgroundService-2.9.0.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://0.gravatar.com/avatar/021b59e6d38ebd243b815891e77bd9d2?d=https%3A%2F%2Fidenticons.github.com%2F605bce3433e6fab3776a8af8c140d369.png&amp;s=140" width="24" />
    <span class="author"><a href="/Red-Folder" rel="author">Red-Folder</a></span>
    <time class="js-relative-date" datetime="2013-08-27T13:08:36-07:00" title="2013-08-27 13:08:36">August 27, 2013</time>
    <div class="commit-title">
        <a href="/Red-Folder/Cordova-Plugin-BackgroundService/commit/1bdea8b9bdd4d0710b399fd588afabbce1229fd6" class="message" data-pjax="true" title="Added TimerMilliseconds to the returned JSON">Added TimerMilliseconds to the returned JSON</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li class="facebox-user-list-item">
          <img height="24" src="https://0.gravatar.com/avatar/021b59e6d38ebd243b815891e77bd9d2?d=https%3A%2F%2Fidenticons.github.com%2F605bce3433e6fab3776a8af8c140d369.png&amp;s=140" width="24" />
          <a href="/Red-Folder">Red-Folder</a>
        </li>
      </ul>
    </div>
  </div>


<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>183 lines (167 sloc)</span>
        <span>6.858 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped leftwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/Red-Folder/Cordova-Plugin-BackgroundService/edit/master/2.9.0/backgroundService-2.9.0.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/Red-Folder/Cordova-Plugin-BackgroundService/raw/master/2.9.0/backgroundService-2.9.0.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/Red-Folder/Cordova-Plugin-BackgroundService/blame/master/2.9.0/backgroundService-2.9.0.js" class="button minibutton ">Blame</a>
          <a href="/Red-Folder/Cordova-Plugin-BackgroundService/commits/master/2.9.0/backgroundService-2.9.0.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon tooltipped downwards"
               href="/Red-Folder/Cordova-Plugin-BackgroundService/delete/master/2.9.0/backgroundService-2.9.0.js"
               title="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>

            </td>
            <td class="blob-line-code">
                    <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm"> * Copyright 2013 Red Folder Consultancy Ltd</span></div><div class='line' id='LC3'><span class="cm"> *   </span></div><div class='line' id='LC4'><span class="cm"> * Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);   </span></div><div class='line' id='LC5'><span class="cm"> * you may not use this file except in compliance with the License.   </span></div><div class='line' id='LC6'><span class="cm"> * You may obtain a copy of the License at       </span></div><div class='line' id='LC7'><span class="cm"> * </span></div><div class='line' id='LC8'><span class="cm"> * 	http://www.apache.org/licenses/LICENSE-2.0   </span></div><div class='line' id='LC9'><span class="cm"> *</span></div><div class='line' id='LC10'><span class="cm"> * Unless required by applicable law or agreed to in writing, software   </span></div><div class='line' id='LC11'><span class="cm"> * distributed under the License is distributed on an &quot;AS IS&quot; BASIS,   </span></div><div class='line' id='LC12'><span class="cm"> * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.   </span></div><div class='line' id='LC13'><span class="cm"> * See the License for the specific language governing permissions and   </span></div><div class='line' id='LC14'><span class="cm"> * limitations under the License.</span></div><div class='line' id='LC15'><span class="cm"> */</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'><span class="cm">/*</span></div><div class='line' id='LC18'><span class="cm"> * Constructor</span></div><div class='line' id='LC19'><span class="cm"> */</span></div><div class='line' id='LC20'><span class="kd">function</span> <span class="nx">CreateBackgroundService</span><span class="p">(</span><span class="nx">serviceName</span><span class="p">,</span> <span class="nx">require</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">module</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC21'>	<span class="kd">var</span> <span class="nx">exec</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s2">&quot;cordova/exec&quot;</span><span class="p">);</span></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'>	<span class="kd">var</span> <span class="nx">BackgroundService</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">serviceName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC24'>		<span class="kd">var</span> <span class="nx">ServiceName</span> <span class="o">=</span> <span class="nx">serviceName</span></div><div class='line' id='LC25'>		<span class="k">this</span><span class="p">.</span><span class="nx">getServiceName</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC26'>			<span class="k">return</span> <span class="nx">ServiceName</span><span class="p">;</span></div><div class='line' id='LC27'>		<span class="p">};</span></div><div class='line' id='LC28'>	<span class="p">};</span></div><div class='line' id='LC29'><br/></div><div class='line' id='LC30'>	<span class="kd">var</span> <span class="nx">BackgroundServiceError</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">code</span><span class="p">,</span> <span class="nx">message</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC31'>		<span class="k">this</span><span class="p">.</span><span class="nx">code</span> <span class="o">=</span> <span class="nx">code</span> <span class="o">||</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC32'>		<span class="k">this</span><span class="p">.</span><span class="nx">message</span> <span class="o">=</span> <span class="nx">message</span> <span class="o">||</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC33'>	<span class="p">};</span>	</div><div class='line' id='LC34'><br/></div><div class='line' id='LC35'>	<span class="cm">/**</span></div><div class='line' id='LC36'><span class="cm">	  * All methods attempt to return the following data in both the success and failure callbacks</span></div><div class='line' id='LC37'><span class="cm">	  * Front end development should take into account any all or all of these values may be null</span></div><div class='line' id='LC38'><span class="cm">	  *</span></div><div class='line' id='LC39'><span class="cm">	  * Following returned in the JSONObject:</span></div><div class='line' id='LC40'><span class="cm">	  *		Boolean Success - was the call a success</span></div><div class='line' id='LC41'><span class="cm">	  *		int ErrorCode - Error code if an error occurred, else will be zero</span></div><div class='line' id='LC42'><span class="cm">	  *		String ErrorMessage - Text representation of the error code</span></div><div class='line' id='LC43'><span class="cm">	  *		Boolean ServiceRunning - True if the Service is running</span></div><div class='line' id='LC44'><span class="cm">	  *		Boolean TimerEnabled - True if the Timer is enabled</span></div><div class='line' id='LC45'><span class="cm">	  *		Boolean RegisteredForBootStart - True if the Service is registered for boot start</span></div><div class='line' id='LC46'><span class="cm">	  *		JSONObject Configuration - A JSONObject of the configuration of the service (contents dependant on the service)</span></div><div class='line' id='LC47'><span class="cm">	  *		JSONObject LastestResult - A JSONObject of the last result of the service (contents dependant on the service)</span></div><div class='line' id='LC48'><span class="cm">	  *		int TimerMilliseconds - Milliseconds used by the background service if Timer enabled</span></div><div class='line' id='LC49'><span class="cm">	  */</span></div><div class='line' id='LC50'><br/></div><div class='line' id='LC51'>	<span class="cm">/**</span></div><div class='line' id='LC52'><span class="cm">	  * Starts the Service</span></div><div class='line' id='LC53'><span class="cm">	  * </span></div><div class='line' id='LC54'><span class="cm">	  * @param successCallback The callback which will be called if the method is successful</span></div><div class='line' id='LC55'><span class="cm">	  * @param failureCallback The callback which will be called if the method encounters an error</span></div><div class='line' id='LC56'><span class="cm">	  */</span></div><div class='line' id='LC57'>	<span class="nx">BackgroundService</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">startService</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">successCallback</span><span class="p">,</span> <span class="nx">failureCallback</span><span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC58'>		<span class="k">return</span> <span class="nx">exec</span><span class="p">(</span>	<span class="nx">successCallback</span><span class="p">,</span>      </div><div class='line' id='LC59'>						<span class="nx">failureCallback</span><span class="p">,</span>      </div><div class='line' id='LC60'>						<span class="s1">&#39;BackgroundServicePlugin&#39;</span><span class="p">,</span>      </div><div class='line' id='LC61'>						<span class="s1">&#39;startService&#39;</span><span class="p">,</span>      </div><div class='line' id='LC62'>						<span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">getServiceName</span><span class="p">()]);</span></div><div class='line' id='LC63'>	<span class="p">};</span></div><div class='line' id='LC64'><br/></div><div class='line' id='LC65'>	<span class="cm">/**</span></div><div class='line' id='LC66'><span class="cm">	  * Stops the Service</span></div><div class='line' id='LC67'><span class="cm">	  *</span></div><div class='line' id='LC68'><span class="cm">	  * @param successCallback The callback which will be called if the method is successful</span></div><div class='line' id='LC69'><span class="cm">	  * @param failureCallback The callback which will be called if the method encounters an error</span></div><div class='line' id='LC70'><span class="cm">	  */</span></div><div class='line' id='LC71'>	<span class="nx">BackgroundService</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">stopService</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">successCallback</span><span class="p">,</span> <span class="nx">failureCallback</span><span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC72'>		<span class="k">return</span> <span class="nx">exec</span><span class="p">(</span>	<span class="nx">successCallback</span><span class="p">,</span>      </div><div class='line' id='LC73'>						<span class="nx">failureCallback</span><span class="p">,</span>      </div><div class='line' id='LC74'>						<span class="s1">&#39;BackgroundServicePlugin&#39;</span><span class="p">,</span>      </div><div class='line' id='LC75'>						<span class="s1">&#39;stopService&#39;</span><span class="p">,</span>      </div><div class='line' id='LC76'>						<span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">getServiceName</span><span class="p">()]);</span></div><div class='line' id='LC77'>	<span class="p">};</span></div><div class='line' id='LC78'><br/></div><div class='line' id='LC79'>	<span class="cm">/**</span></div><div class='line' id='LC80'><span class="cm">	  * Enables the Service Timer</span></div><div class='line' id='LC81'><span class="cm">	  *</span></div><div class='line' id='LC82'><span class="cm">	  * @param milliseconds The milliseconds used for the timer</span></div><div class='line' id='LC83'><span class="cm">	  * @param successCallback The callback which will be called if the method is successful</span></div><div class='line' id='LC84'><span class="cm">	  * @param failureCallback The callback which will be called if the method encounters an error</span></div><div class='line' id='LC85'><span class="cm">	  */</span></div><div class='line' id='LC86'>	<span class="nx">BackgroundService</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">enableTimer</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">milliseconds</span><span class="p">,</span> <span class="nx">successCallback</span><span class="p">,</span> <span class="nx">failureCallback</span><span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC87'>		<span class="k">return</span> <span class="nx">exec</span><span class="p">(</span>	<span class="nx">successCallback</span><span class="p">,</span>      </div><div class='line' id='LC88'>						<span class="nx">failureCallback</span><span class="p">,</span>      </div><div class='line' id='LC89'>						<span class="s1">&#39;BackgroundServicePlugin&#39;</span><span class="p">,</span>      </div><div class='line' id='LC90'>						<span class="s1">&#39;enableTimer&#39;</span><span class="p">,</span>      </div><div class='line' id='LC91'>						<span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">getServiceName</span><span class="p">(),</span> <span class="nx">milliseconds</span><span class="p">]);</span></div><div class='line' id='LC92'>	<span class="p">};</span></div><div class='line' id='LC93'><br/></div><div class='line' id='LC94'>	<span class="cm">/**</span></div><div class='line' id='LC95'><span class="cm">	  * Disabled the Service Timer</span></div><div class='line' id='LC96'><span class="cm">	  *</span></div><div class='line' id='LC97'><span class="cm">	  * @param successCallback The callback which will be called if the method is successful</span></div><div class='line' id='LC98'><span class="cm">	  * @param failureCallback The callback which will be called if the method encounters an error</span></div><div class='line' id='LC99'><span class="cm">	  */</span></div><div class='line' id='LC100'>	<span class="nx">BackgroundService</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">disableTimer</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">successCallback</span><span class="p">,</span> <span class="nx">failureCallback</span><span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC101'>		<span class="k">return</span> <span class="nx">exec</span><span class="p">(</span>	<span class="nx">successCallback</span><span class="p">,</span>      </div><div class='line' id='LC102'>						<span class="nx">failureCallback</span><span class="p">,</span>      </div><div class='line' id='LC103'>						<span class="s1">&#39;BackgroundServicePlugin&#39;</span><span class="p">,</span>      </div><div class='line' id='LC104'>						<span class="s1">&#39;disableTimer&#39;</span><span class="p">,</span>      </div><div class='line' id='LC105'>						<span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">getServiceName</span><span class="p">()]);</span></div><div class='line' id='LC106'>	<span class="p">};</span></div><div class='line' id='LC107'><br/></div><div class='line' id='LC108'>	<span class="cm">/**</span></div><div class='line' id='LC109'><span class="cm">	  * Sets the configuration for the service</span></div><div class='line' id='LC110'><span class="cm">	  *</span></div><div class='line' id='LC111'><span class="cm">	  * @param configuration JSONObject to be sent to the service</span></div><div class='line' id='LC112'><span class="cm">	  * @param successCallback The callback which will be called if the method is successful</span></div><div class='line' id='LC113'><span class="cm">	  * @param failureCallback The callback which will be called if the method encounters an error</span></div><div class='line' id='LC114'><span class="cm">	  */</span></div><div class='line' id='LC115'>	<span class="nx">BackgroundService</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">setConfiguration</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">configuration</span><span class="p">,</span> <span class="nx">successCallback</span><span class="p">,</span> <span class="nx">failureCallback</span><span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC116'>		<span class="k">return</span> <span class="nx">exec</span><span class="p">(</span>	<span class="nx">successCallback</span><span class="p">,</span>      </div><div class='line' id='LC117'>						<span class="nx">failureCallback</span><span class="p">,</span>      </div><div class='line' id='LC118'>						<span class="s1">&#39;BackgroundServicePlugin&#39;</span><span class="p">,</span>      </div><div class='line' id='LC119'>						<span class="s1">&#39;setConfiguration&#39;</span><span class="p">,</span>      </div><div class='line' id='LC120'>						<span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">getServiceName</span><span class="p">(),</span> <span class="nx">configuration</span><span class="p">]);</span></div><div class='line' id='LC121'>	<span class="p">};</span></div><div class='line' id='LC122'><br/></div><div class='line' id='LC123'>	<span class="cm">/**</span></div><div class='line' id='LC124'><span class="cm">	  * Registers the service for Boot Start</span></div><div class='line' id='LC125'><span class="cm">	  *</span></div><div class='line' id='LC126'><span class="cm">	  * @param successCallback The callback which will be called if the method is successful</span></div><div class='line' id='LC127'><span class="cm">	  * @param failureCallback The callback which will be called if the method encounters an error</span></div><div class='line' id='LC128'><span class="cm">	  */</span></div><div class='line' id='LC129'>	<span class="nx">BackgroundService</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">registerForBootStart</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">successCallback</span><span class="p">,</span> <span class="nx">failureCallback</span><span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC130'>		<span class="k">return</span> <span class="nx">exec</span><span class="p">(</span>	<span class="nx">successCallback</span><span class="p">,</span>      </div><div class='line' id='LC131'>						<span class="nx">failureCallback</span><span class="p">,</span>      </div><div class='line' id='LC132'>						<span class="s1">&#39;BackgroundServicePlugin&#39;</span><span class="p">,</span>      </div><div class='line' id='LC133'>						<span class="s1">&#39;registerForBootStart&#39;</span><span class="p">,</span>      </div><div class='line' id='LC134'>						<span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">getServiceName</span><span class="p">()]);</span></div><div class='line' id='LC135'>	<span class="p">};</span></div><div class='line' id='LC136'><br/></div><div class='line' id='LC137'>	<span class="cm">/**</span></div><div class='line' id='LC138'><span class="cm">	  * Deregisters the service for Boot Start</span></div><div class='line' id='LC139'><span class="cm">	  *</span></div><div class='line' id='LC140'><span class="cm">	  * @param successCallback The callback which will be called if the method is successful</span></div><div class='line' id='LC141'><span class="cm">	  * @param failureCallback The callback which will be called if the method encounters an error</span></div><div class='line' id='LC142'><span class="cm">	  */</span></div><div class='line' id='LC143'>	<span class="nx">BackgroundService</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">deregisterForBootStart</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">successCallback</span><span class="p">,</span> <span class="nx">failureCallback</span><span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC144'>		<span class="k">return</span> <span class="nx">exec</span><span class="p">(</span>	<span class="nx">successCallback</span><span class="p">,</span>      </div><div class='line' id='LC145'>						<span class="nx">failureCallback</span><span class="p">,</span>      </div><div class='line' id='LC146'>						<span class="s1">&#39;BackgroundServicePlugin&#39;</span><span class="p">,</span>      </div><div class='line' id='LC147'>						<span class="s1">&#39;deregisterForBootStart&#39;</span><span class="p">,</span>      </div><div class='line' id='LC148'>						<span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">getServiceName</span><span class="p">()]);</span></div><div class='line' id='LC149'>	<span class="p">};</span></div><div class='line' id='LC150'><br/></div><div class='line' id='LC151'>	<span class="cm">/**</span></div><div class='line' id='LC152'><span class="cm">	  * Get the current status of the service.	</span></div><div class='line' id='LC153'><span class="cm">	  * </span></div><div class='line' id='LC154'><span class="cm">	  * @param successCallback The callback which will be called if the method is successful</span></div><div class='line' id='LC155'><span class="cm">	  * @param failureCallback The callback which will be called if the method encounters an error</span></div><div class='line' id='LC156'><span class="cm">	  */</span></div><div class='line' id='LC157'>	<span class="nx">BackgroundService</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">isRegisteredForBootStart</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">successCallback</span><span class="p">,</span> <span class="nx">failureCallback</span><span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC158'>		<span class="k">return</span> <span class="nx">exec</span><span class="p">(</span>	<span class="nx">successCallback</span><span class="p">,</span>      </div><div class='line' id='LC159'>						<span class="nx">failureCallback</span><span class="p">,</span>      </div><div class='line' id='LC160'>						<span class="s1">&#39;BackgroundServicePlugin&#39;</span><span class="p">,</span>      </div><div class='line' id='LC161'>						<span class="s1">&#39;isRegisteredForBootStart&#39;</span><span class="p">,</span>      </div><div class='line' id='LC162'>						<span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">getServiceName</span><span class="p">()]);</span></div><div class='line' id='LC163'>	<span class="p">};</span></div><div class='line' id='LC164'><br/></div><div class='line' id='LC165'><br/></div><div class='line' id='LC166'>	<span class="cm">/**</span></div><div class='line' id='LC167'><span class="cm">	  * Returns the status of the service</span></div><div class='line' id='LC168'><span class="cm">	  *</span></div><div class='line' id='LC169'><span class="cm">	  * @param successCallback The callback which will be called if the method is successful</span></div><div class='line' id='LC170'><span class="cm">	  * @param failureCallback The callback which will be called if the method encounters an error</span></div><div class='line' id='LC171'><span class="cm">	  */</span></div><div class='line' id='LC172'>	<span class="nx">BackgroundService</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">getStatus</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">successCallback</span><span class="p">,</span> <span class="nx">failureCallback</span><span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC173'>		<span class="k">return</span> <span class="nx">exec</span><span class="p">(</span>	<span class="nx">successCallback</span><span class="p">,</span>      </div><div class='line' id='LC174'>						<span class="nx">failureCallback</span><span class="p">,</span>      </div><div class='line' id='LC175'>						<span class="s1">&#39;BackgroundServicePlugin&#39;</span><span class="p">,</span>      </div><div class='line' id='LC176'>						<span class="s1">&#39;getStatus&#39;</span><span class="p">,</span>      </div><div class='line' id='LC177'>						<span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">getServiceName</span><span class="p">()]);</span></div><div class='line' id='LC178'>	<span class="p">};</span></div><div class='line' id='LC179'><br/></div><div class='line' id='LC180'>	<span class="kd">var</span> <span class="nx">backgroundService</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">BackgroundService</span><span class="p">(</span><span class="nx">serviceName</span><span class="p">);</span></div><div class='line' id='LC181'>	<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">backgroundService</span><span class="p">;</span></div><div class='line' id='LC182'><span class="p">};</span> </div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.05452s from github-fe115-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/Red-Folder/Cordova-Plugin-BackgroundService/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
  </body>
</html>

